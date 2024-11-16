import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./utils";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    let [signupInfo, setSignupInfo] = useState({
        username: "",
        password: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);
        let copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, email, password } = signupInfo;
        if (!username || !email || !password) {
            return handleError("Username, Email & Password are required!");
        }
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signupInfo),
            });
            const result = await response.json();
            console.log(result);
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/login");
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

            <div className="col-md-6">
                <h1 className="mb-1 fs-2 text-decoration-underline">Signup</h1>
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
                            value={signupInfo.email}
                            autoFocus
                            onChange={handleChange}
                        />
                    </div>{" "}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <div className="input-group has-validation">
                            <input
                                type="text"
                                className="form-control  "
                                id="username"
                                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                name="username"
                                placeholder="enter username"
                                value={signupInfo.username}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
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
                            value={signupInfo.password}
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
                            Signup
                        </button>
                    </div>
                    <span className="text-muted">
                        Already have an account ?{"  "}
                        <Link to={"/login"}>Login</Link>
                    </span>
                </form>
            </div>
            <div className="col-2"></div>
            <ToastContainer />
        </div>
    );
}

export default Signup;
