import css from "../styles/style.module.css";
function SubmitBtn({ tag }) {
  return (
    <button type="submit" className={`${css.SubmitBtn} btn btn-primary`}>
      {tag}
    </button>
  );
}
export default SubmitBtn;
