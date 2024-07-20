import Password from "../loginTools/Password";
import Input from "../loginTools/Input";
import Lable from "../loginTools/Lable";
import SubmitBtn from "../loginTools/SubmitBtn";
import Error from "../utilityTools/Error";
import { useRef, useState } from "react";

const Login = ({ handleLogin }) => {
  const userName = useRef("");
  const password = useRef("");
  let [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userName.current.value) {
      setError("Plese Enter Username or Email");
      return;
    }

    if (!password.current.value) {
      setError("Please Enter Password");
      return;
    }

    setError("");
    const [name, pass] = [userName.current.value, password.current.value];
    userName.current.value = "";
    password.current.value = "";

    handleLogin(name, pass);
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Lable name={"Username or Email"} />
      <Input setInput={userName} />
      <Lable name={"Password"} />
      <Password setPassword={password} />
      {error && <Error msg={error} />}
      <SubmitBtn tag={"Sign In"} />
    </form>
  );
};

export default Login;
