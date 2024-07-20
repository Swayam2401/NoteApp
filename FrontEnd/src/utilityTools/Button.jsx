import css from "../styles/style.module.css";
function Button({ name, state, clicked }) {
  return (
    <button
      className={state ? `${css.Button} ${css.ButtonDark}` : `${css.Button}`}
      onClick={() => clicked(name)}
    >
      {name}
    </button>
  );
}

export default Button;
