import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { Navigate } from "react-router-dom";

const Home = () => {
    const isAuthenticated = localStorage.getItem("token") ? true : false;

    return (
        <>
            {isAuthenticated ? (
                <>
                    <TopBar />
                    <Dashboard />
                </>
            ) : (
                <Navigate to={"/login"} />
            )}
        </>
    );
};

export default Home;
