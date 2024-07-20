import { MdDelete } from "react-icons/md";
import { TbPinnedOff } from "react-icons/tb";
import { TbPinned } from "react-icons/tb";
import { FaPen } from "react-icons/fa";
import Tag from "./Tag";
import months from "../Helpers/months";
import css from "../styles/style.module.css";

function CardView({ note, handlePinned, handleDelete, handleUpdate }) {
  const { title, description, pinned, dataOfCreation, _id, tags } = note;

  const formatedDate =
    dataOfCreation.substring(8, 10) * 1 +
    "-" +
    months[dataOfCreation.substring(5, 7) * 1 - 1] +
    "-" +
    dataOfCreation.substring(0, 4);

  return (
    <div key={_id} className={`${css.Card} card`}>
      <div className={pinned ? `${css.PinnedCard} card-body` : "card-body"}>
        {pinned ? (
          <button
            className={
              pinned
                ? `${css.PinnedCard} ${css.CardButton}`
                : `${css.CardButton}`
            }
            onClick={() => {
              handlePinned(_id, !pinned);
            }}
          >
            <TbPinned className={css.PinButton} />
          </button>
        ) : (
          <button
            className={
              pinned
                ? `${css.PinnedCard} ${css.CardButton}`
                : `${css.CardButton}`
            }
            onClick={() => {
              handlePinned(_id, !pinned);
            }}
          >
            <TbPinnedOff className={css.PinButton} />
          </button>
        )}
        <br />
        <br />
        <h5 className={`${css.CardTitle} card-title`}>{title.toUpperCase()}</h5>
        <br />
        <h6 className="card-text">{description}</h6>
        {tags.length !== 0 ? (
          <div className={css.TagContainer}>
            {tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>
        ) : null}
        <span className={css.Date}>Date : {formatedDate}</span>
        <br />
        <br />
        <button
          className={
            pinned ? `${css.PinnedCard} ${css.CardButton}` : `${css.CardButton}`
          }
          onClick={() => handleDelete(_id)}
        >
          <MdDelete />
        </button>
        <button
          className={
            pinned ? `${css.PinnedCard} ${css.CardButton}` : `${css.CardButton}`
          }
          onClick={() => handleUpdate(note)}
        >
          <FaPen />
        </button>
      </div>
    </div>
  );
}

export default CardView;
