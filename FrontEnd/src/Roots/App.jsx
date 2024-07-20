import { useState, useContext } from "react";
import { UserContext } from "../Helpers/store";
import { useNavigate } from "react-router-dom";
import Button from "../utilityTools/Button";
import Login from "../LoginAndSingUp/Login";
import SignUp from "../LoginAndSingUp/SignUp";
import Container from "../utilityTools/Container";
import { fetchLoginData, fetchSignUpData } from "../Helpers/Fetch";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [buttonState, setButtonState] = useState([true, false]);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const clicking = (name) => {
    let newButtonState = [false, false];

    if (name === "Sign In") {
      newButtonState[0] = true;
    } else {
      newButtonState[1] = true;
    }

    setButtonState(newButtonState);
  };

  const handleLogin = async (userName, password) => {
    const fetchedUser = await fetchLoginData(userName, password);
    setUser(fetchedUser);
    navigate(`/dashboard`);
  };

  const handleSignUp = async (email, userName, password) => {
    const fetchedUser = await fetchSignUpData(email, userName, password);
    setUser(fetchedUser);
    navigate(`/dashboard`);
  };

  return (
    <Container>
      <Button name={"Sign In"} state={buttonState[0]} clicked={clicking} />
      <Button name={"Sign Up"} state={buttonState[1]} clicked={clicking} />
      {buttonState[0] ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <SignUp handleSignUp={handleSignUp} />
      )}
    </Container>
  );
}

export default App;
