import Password from "../loginTools/Password";
import Input from "../loginTools/Input";
import Lable from "../loginTools/Lable";
import SubmitBtn from "../loginTools/SubmitBtn";
import Error from "../utilityTools/Error";
import { useState, useRef } from "react";

const SignUp = ({ handleSignUp }) => {
  const userName = useRef("");
  const password = useRef("");
  const email = useRef("");

  let [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.current.value) {
      setError("Please Enter Email");
      return;
    }
    if (!userName.current.value) {
      setError("Please Enter username");
      return;
    }
    if (!password.current.value) {
      setError("Please Enter Password");
      return;
    }

    setError("");
    const [mail, name, pass] = [
      email.current.value,
      userName.current.value,
      password.current.value,
    ];
    email.current.value = "";
    userName.current.value = "";
    password.current.value = "";

    handleSignUp(mail, name, pass);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Lable name={"Email"} />
      <Input name={"email"} setInput={email} />
      <Lable name={"Username"} />
      <Input name={"username"} setInput={userName} />
      <Lable name={"Password"} />
      <Password setPassword={password} />
      {error && <Error msg={error} />}
      <SubmitBtn tag={"Sign Up"} />
    </form>
  );
};

export default SignUp;
