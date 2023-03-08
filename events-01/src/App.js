import "./App.css";
import Eventpage from "./pages/Eventpage";

// import { Routes, Route } from "react-router-dom";
import { ApiClient } from "./pages/ApiClient";
import React, { useState } from "react"
import Login from "./pages/Login";

function App() {
  const [token, changeToken] = useState(window.localStorage.getItem("token"));

  const client = new ApiClient(
    () => token,
    () => logout()
  );

  const login = (token) => {
    window.localStorage.setItem("token", token);
    changeToken(token);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    changeToken(undefined);
  };

  return (
    <>
      {token ? (
        <Eventpage client={client} />
      ) : (
        <Login loggedIn={(token) => login(token)} client={client} />
      )}
    </>
  );
}

export default App;
