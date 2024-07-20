import css from "../styles/style.module.css";

function Error({ msg }) {
  return (
    <center>
      <span className={css.Error}>{msg}</span>
    </center>
  );
}
export default Error;
