import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import css from "../styles/style.module.css";

function Password({ setPassword }) {
  let [visible, setVisibility] = useState(false);

  const toggleIt = () => {
    visible = !visible;
    setVisibility(visible);
  };

  return (
    <>
      <input
        type={visible ? "text" : "password"}
        className={css.Input}
        ref={setPassword}
      />
      <button onClick={toggleIt} className={css.EyeButton} type="button">
        {visible ? <IoMdEyeOff /> : <IoMdEye />}
      </button>
    </>
  );
}

export default Password;
