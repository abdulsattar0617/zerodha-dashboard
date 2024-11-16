import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
