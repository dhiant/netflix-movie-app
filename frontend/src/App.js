import React from "react";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

function App() {
  const user = false;
  return (
    <Routes>
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate to="/register" />}
      />
      {user && (
        <>
          <Route path="/movies" element={<Home type="movies" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
        </>
      )}
    </Routes>
  );
}

export default App;
