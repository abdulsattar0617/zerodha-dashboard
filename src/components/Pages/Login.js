import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./utils";
import { useNavigate, Link } from "react-router-dom";
// import './style.css';

function Login() {
    let [loginInfo, setLoginInfo] = useState({
        password: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        let copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError("Email & Password are required!");
        }
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginInfo),
            });
            const result = await response.json();

            console.log(result);

            const { success, message, error, token, username } = result;
            localStorage.setItem("token", token);
            localStorage.setItem("loggedInUser", username);
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else if (error) {
                handleError(error);
            }
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-md-6 ">
                <h1 className="mb-1 fs-2 text-decoration-underline">Login</h1>
                <form className="my-3 p-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="xyz@abc.com"
                            name="email"
                            value={loginInfo.email}
                            autoFocus
                            onChange={handleChange}
                        />
                    </div>{" "}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control  "
                            id="password"
                            name="password"
                            aria-describedby="validationServer03Feedback"
                            placeholder="enter password"
                            value={loginInfo.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            type="submit"
                            className="btn mt-3 p-2 fs-5 fw-semibold"
                            style={{
                                width: "25%",
                                margin: "0 auto",
                                backgroundColor: "#387ed1",
                                color: "#FFF",
                            }}
                        >
                            Login
                        </button>
                    </div>
                    <span className="text-muted">
                        Don't have any account ?{"  "}
                        <Link to={"/signup"}>Signup</Link>
                    </span>
                </form>
            </div>
            <div className="col-2"></div>
            <ToastContainer />
        </div>
    );
}

export default Login;
