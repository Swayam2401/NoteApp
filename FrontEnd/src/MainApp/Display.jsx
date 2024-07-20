import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Helpers/store";
import { fetchNotes, updatePinnedStatus, deleteNote } from "../Helpers/Fetch";
import CardView from "./CardView";
import css from "../styles/style.module.css";
import AddEditNote from "./AddEditNote";
import Modal from "react-modal";
import Loading from "../utilityTools/Loading";

const Display = () => {
  const [isOpen, setModal] = useState(false);
  const { isRender, user, notes, setNotes, isLoading, setLoading } =
    useContext(UserContext);
  const [note, setNote] = useState({});

  const getNotes = async () => {
    setLoading(true);
    try {
      const fetchedNotes = await fetchNotes(user._id);
      setNotes(fetchedNotes);
      setLoading(false);
      return;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      getNotes();
    }
  }, [user, isRender]);

  const handlePinned = async (_id, status) => {
    await updatePinnedStatus(_id, status);
    getNotes();
  };

  const handleDelete = async (_id) => {
    await deleteNote(_id);
    getNotes();
  };

  const handleUpdate = (note) => {
    setNote(note);
    setModal(true);
    return;
  };

  {
    if (isLoading) {
      return <Loading />;
    }
  }

  {
    if (notes.length === 0) {
      return <h2 className={css.NoNoteMessage}>NO NOTES FOUND</h2>;
    }
  }

  return (
    <>
      <div className={css.CardContainer}>
        {notes.map((note) => (
          <CardView
            note={note}
            handlePinned={handlePinned}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setModal(false)}
        style={{
          overlay: {},
        }}
        className={css.AddNoteContainer}
      >
        <AddEditNote closeModal={setModal} name={"UPDATE"} note={note} />
      </Modal>
    </>
  );
};

export default Display;
