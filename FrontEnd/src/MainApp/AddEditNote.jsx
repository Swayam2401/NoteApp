//Icons
import { RxCross1 } from "react-icons/rx";
import { VscAdd } from "react-icons/vsc";

//state and other hooks
import { useRef, useState, useContext, useEffect } from "react";

//styling
import css from "../styles/style.module.css";

//context provider
import { addNote, updateNote } from "../Helpers/Fetch";
import { UserContext } from "../Helpers/store";

//components used
import Lable from "../loginTools/Lable";
import Error from "../utilityTools/Error";
import Tag from "./Tag";

function AddEditNote({ name, note, closeModal }) {
  const { user, isRender, setRendering } = useContext(UserContext);

  const title = useRef();
  const content = useRef();
  const tag = useRef();
  const [error, setError] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    title.current.value = note.title;
    content.current.value = note.description;
    setTags(note.tags);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title.current.value === "") {
      setError("Title is required for note");
      return;
    }

    const newTitle = title.current.value;
    const description = content.current.value;
    const newTags = tags;

    const newNote = {
      userId: user._id,
      title: newTitle,
      description,
      tags: newTags,
    };

    if (name === "ADD") {
      await addNote(newNote);
    } else {
      await updateNote(note._id, newNote);
    }
    setRendering(!isRender);
    closeModal(false);
  };

  const handleCancle = (tag) => {
    const newTags = tags.filter((curr) => curr !== tag);
    setTags(newTags);
  };

  const handleTags = () => {
    if (!tag.current.value) {
      return;
    }

    let newTag = tag.current.value;
    tag.current.value = "";

    if (newTag.charAt(0) !== "#") {
      newTag = "#" + newTag;
    }

    const newTags = [...tags, newTag];
    setTags(newTags);
  };

  return (
    <form className={css.AddNote} onSubmit={(event) => handleSubmit(event)}>
      <button
        type="button"
        className={css.CancleButton}
        onClick={() => closeModal(false)}
      >
        <RxCross1 className={css.CancleIcon} />
      </button>
      <br />
      <Lable name={"Title"} />
      <input
        type="text"
        placeholder="Go to GYM"
        className={css.TitleInput}
        ref={title}
      />
      <Lable name={"Content"} />
      <textarea
        className={css.Content}
        type="text"
        rows="8"
        ref={content}
        placeholder="add content"
      />
      <Lable name={"tags"} />
      {tags.length !== 0 ? (
        <div className={css.TagContainer}>
          {tags.map((tag) => (
            <Tag tag={tag} isEditable={true} handleCancle={handleCancle} />
          ))}
        </div>
      ) : null}
      <input
        className={css.TagInput}
        type="text"
        placeholder="#workout"
        ref={tag}
      />
      <button
        className={`${css.AddTagButton} btn btn-primary`}
        type="button"
        onClick={() => handleTags()}
      >
        <VscAdd className={css.AddSign} />
      </button>

      {error ? <Error msg={error} /> : null}

      <button
        className={`${css.AddButtonNewNote} btn btn-primary`}
        type="submit"
      >
        {name}
      </button>
    </form>
  );
}

export default AddEditNote;
