import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "../signup-page/SignUp.css";
import Header from "../header-section/Header";
import SubHeader from "../header-section/SubHeader";
import Contact from "../contact-section/Contact";
import Footer from "../footer-section/Footer";
import SignInImg from "../../assets/signin.png";

function SignUp() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateSignInForm = () => {
        const newErrors = {};
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateSignUpForm = () => {
        const newErrors = {};
        if (!email) newErrors.email = "Email is required";
        if (!mobile) newErrors.mobile = "Mobile is required";
        if (!password) newErrors.password = "Password is required";
        if (password !== confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        if (validateSignInForm()) {
            console.log("Sign in successful");
        }
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (validateSignUpForm()) {
            console.log("Sign up successful");
        }
    };

    const handleGoogleSuccess = (response) => {
        console.log(response);
        // Handle Google login response
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div>
                <Header />
                <SubHeader />
                <div className="auth-container">
                    {isSignIn ? (
                        <div className="auth-content">
                            <div className="auth-form">
                                <h2>Welcome Back to CAR SOUND 24</h2>
                                <p>
                                    Stay connected with the best in car audio
                                    accessories.
                                </p>
                                <div className="auth-header">
                                    <button
                                        onClick={() => setIsSignIn(true)}
                                        className={isSignIn ? "active" : ""}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        onClick={() => setIsSignIn(false)}
                                        className={!isSignIn ? "active" : ""}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <form onSubmit={handleSignInSubmit}>
                                    <div>
                                        <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <span className="error">
                                            {errors.email}
                                        </span>
                                    )}
                                    </div>
                                    <div>
                                        <div>
                                            <label>Password</label>
                                            <span>Forgot Password</span>
                                        </div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {errors.password && (
                                        <span className="error">
                                            {errors.password}
                                        </span>
                                    )}
                                    </div>
                                    <button type="submit">Sign In</button>
                                </form>
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onFailure={handleGoogleSuccess}
                                />
                            </div>
                            <div className="auth-image">
                                <img src={SignInImg} alt="Car Sound" />
                            </div>
                        </div>
                    ) : (
                        <div className="auth-content">
                            <div className="auth-form">
                                <h2>Join Car Sound 24</h2>
                                <p>
                                    Stay Tuned with the Latest in Car Audio -
                                    Join Car Sound 24
                                </p>
                                <div className="auth-header">
                                    <button
                                        onClick={() => setIsSignIn(true)}
                                        className={isSignIn ? "active" : ""}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        onClick={() => setIsSignIn(false)}
                                        className={!isSignIn ? "active" : ""}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <form onSubmit={handleSignUpSubmit}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <span className="error">
                                            {errors.email}
                                        </span>
                                    )}
                                    <input
                                        type="text"
                                        placeholder="Mobile"
                                        value={mobile}
                                        onChange={(e) =>
                                            setMobile(e.target.value)
                                        }
                                    />
                                    {errors.mobile && (
                                        <span className="error">
                                            {errors.mobile}
                                        </span>
                                    )}
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {errors.password && (
                                        <span className="error">
                                            {errors.password}
                                        </span>
                                    )}
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                    />
                                    {errors.confirmPassword && (
                                        <span className="error">
                                            {errors.confirmPassword}
                                        </span>
                                    )}
                                    <button type="submit">Sign Up</button>
                                </form>
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onFailure={handleGoogleSuccess}
                                />
                            </div>
                            <div className="auth-image">
                                <img src={SignInImg} alt="Car Sound" />
                            </div>
                        </div>
                    )}
                </div>
                <Contact />
                <Footer />
            </div>
        </GoogleOAuthProvider>
    );
}

export default SignUp;
