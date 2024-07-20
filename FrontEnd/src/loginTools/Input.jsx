import css from "../styles/style.module.css";
function Input({ setInput }) {
  return <input type="text" className={css.Input} ref={setInput} />;
}

export default Input;
