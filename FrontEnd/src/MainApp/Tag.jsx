import css from "../styles/style.module.css";
import { RxCross1 } from "react-icons/rx";

const Tag = ({ tag, isEditable, handleCancle }) => {
  return (
    <div className={css.Tag}>
      {tag}
      {isEditable ? (
        <button
          type="button"
          className={css.DeleteTagButton}
          onClick={() => handleCancle(tag)}
        >
          <RxCross1 className={css.TagCrossIcon} />
        </button>
      ) : null}
    </div>
  );
};

export default Tag;
