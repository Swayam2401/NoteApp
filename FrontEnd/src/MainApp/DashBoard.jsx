import NavBar from "./NavBar";
import Display from "./Display";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../Helpers/store";
import { useContext, useEffect } from "react";

const DashBoard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username) {
      navigate("/");
    }
  });

  {
    if (!user.username) {
      return;
    }
  }

  return (
    <>
      <NavBar />
      <Display />
    </>
  );
};

export default DashBoard;
