import { useState } from "react";
import { UserContext } from "../Helpers/store";
import App from "./App";
import DashBoard from "../MainApp/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Index = () => {
  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);
  const [isRender, setRendering] = useState(false);
  const [isLoading, setLoading] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setRendering,
        isRender,
        notes,
        setNotes,
        isLoading,
        setLoading,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<App />} />
          <Route path={`/dashboard`} element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default Index;
