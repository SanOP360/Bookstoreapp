import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Signup from "./components/Singup";
import  { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
 const [authUser, setAuthUser] = useAuth();
 console.log("Logged in user", authUser);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signUp" />}
        />
        <Route path="/signUp" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
