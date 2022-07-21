import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import Preferences from "./components/Pages/Preferences";
import "./App.css";

function App() {
  const [token, setToken] = useState();
  // console.log(token, 'app.js');
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <Navbar />
      <h1 className="application_txt">Application</h1>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </>
  );
}

export default App;
