import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import Preferences from "./components/Pages/Preferences";
import useToken from "./components/Hook/useToken";
import "./App.css";

function App() {
  const { token, setToken, clearToken } = useToken();
  // console.log(token, 'app.js');

  if (!token) {
    return (
      <>
        <Navbar loginStatus={false}/>
        <Login setToken={setToken} />
      </>
    );
  }

  return (
    <>
      <Navbar loginStatus={true} clearToken={clearToken}/>
      <h1 className="application_txt">Application</h1>
      <Routes>
        <Route path="/" element={<h2 className="application_txt">Home</h2>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </>
  );
}

export default App;
