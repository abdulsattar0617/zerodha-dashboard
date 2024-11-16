import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from "./Pages/utils";

const Menu = () => {
    let [selectedMenu, setSelectedMenu] = useState(0);
    let [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(0);
    const [loggedInUser, setLoggedInUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem("loggedInUser"));
    }, [loggedInUser]);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleLogout = (e) => {
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUser");

        handleSuccess("User Logout success.");

        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return (
        <div className="menu-container">
            <img src="logo.png" alt="description" style={{ width: "50px" }} />
            <div className="menus">
                <ul>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to={"/"}
                            onClick={() => handleMenuClick(0)}
                        >
                            <p
                                className={
                                    selectedMenu === 0
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Dashboard
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to={"/orders"}
                            onClick={() => handleMenuClick(1)}
                        >
                            <p
                                className={
                                    selectedMenu === 1
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Orders
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to={"/holdings"}
                            onClick={() => handleMenuClick(2)}
                        >
                            <p
                                className={
                                    selectedMenu === 2
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Holdings
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to={"/positions"}
                            onClick={() => handleMenuClick(3)}
                        >
                            <p
                                className={
                                    selectedMenu === 3
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Positions
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to={"/funds"}
                            onClick={() => handleMenuClick(4)}
                        >
                            <p
                                className={
                                    selectedMenu === 4
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Funds
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to={"/apps"}
                            onClick={() => handleMenuClick(5)}
                        >
                            <p
                                className={
                                    selectedMenu === 5
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Apps
                            </p>
                        </Link>
                    </li>
                </ul>
                <button
                    onClick={handleLogout}
                    style={{
                        backgroundColor: "red",
                        marginRight: "1rem",
                        padding: "0.75rem",
                        border: "1px solid white",
                        borderRadius: "1.5rem",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                    }}
                >
                    <span style={{ color: "#FFF" }}>Logout</span>
                </button>
                <hr />
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">ZU</div>
                    <p className="username">{loggedInUser}</p>
                </div>
            </div>

            {/* <ToastContainer /> */}
        </div>
    );
};

export default Menu;
