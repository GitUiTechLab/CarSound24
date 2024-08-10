import React, { useState } from "react";
import "../signup-page/SignUp.css";
import Header from "../header-section/Header";
import Footer from "../footer-section/Footer";
import SignInImg from "../../assets/signin.png";
import SignUpImg from "../../assets/signup.jpeg";
import Contact from "../contact-section/Contact";
import SubHeader from "../header-section/SubHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function SignUp() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

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
                <SubHeader styleHeader={"new-subheader"} />
                <div className="auth-container">
                    {isSignIn ? (
                        <div className="auth-content">
                            <div className="auth-form-container">
                                <div className="auth-form">
                                    <h2>Welcome Back to CAR SOUND 24</h2>
                                    <p>Stay connected with the best in car audio accessories.</p>
                                    <div className="authheader">
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
                                        <div className="input-container">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                placeholder="alma.lawson@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {errors.email && (
                                                <span className="error">{errors.email}</span>
                                            )}
                                        </div>
                                        <div className="input-container">
                                            <div className="forgot-container">
                                                <label>Password</label>
                                                <span>Forgot Password</span>
                                            </div>
                                            <div className="password-container">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <FontAwesomeIcon
                                                    icon={showPassword ? faEyeSlash : faEye}
                                                    onClick={togglePasswordVisibility}
                                                    className="password-icon"
                                                />
                                            </div>
                                            {errors.password && (
                                                <span className="error">{errors.password}</span>
                                            )}
                                        </div>
                                        <button type="submit">Sign In</button>
                                        <div className="hr-text">
                                            <span>Or</span>
                                        </div>
                                    </form>
                                    <div className="google-container">
                                        <GoogleLogin
                                            onSuccess={handleGoogleSuccess}
                                            onFailure={handleGoogleSuccess}
                                            className="google-auth"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="auth-image">
                                <img src={SignInImg} alt="Car Sound" />
                            </div>
                        </div>
                    ) : (
                        <div className="auth-content">
                            <div className="auth-form-container">
                                <div className="auth-form">
                                    <h2>Join Car Sound 24</h2>
                                    <p>Stay Tuned with the Latest in Car Audio - Join Car Sound 24</p>
                                    <div className="authheader">
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
                                        <div className="signup-container">
                                            <div className="input-container">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                {errors.email && (
                                                    <span className="error">{errors.email}</span>
                                                )}
                                            </div>
                                            <div className="input-container">
                                                <label>Mobile</label>
                                                <input
                                                    type="text"
                                                    placeholder="Mobile"
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                />
                                                {errors.mobile && (
                                                    <span className="error">{errors.mobile}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="signup-container">
                                            <div className="input-container">
                                                <label>Password</label>
                                                <div className="password-container">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={showPassword ? faEyeSlash : faEye}
                                                        onClick={togglePasswordVisibility}
                                                        className="password-icon"
                                                    />
                                                </div>
                                                {errors.password && (
                                                    <span className="error">{errors.password}</span>
                                                )}
                                            </div>
                                            <div className="input-container">
                                                <label>Confirm Password</label>
                                                <div className="password-container">
                                                    <input
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        placeholder="Confirm Password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={showConfirmPassword ? faEyeSlash : faEye}
                                                        onClick={toggleConfirmPasswordVisibility}
                                                        className="password-icon"
                                                    />
                                                </div>
                                                {errors.confirmPassword && (
                                                    <span className="error">{errors.confirmPassword}</span>
                                                )}
                                            </div>
                                        </div>
                                        <button type="submit">Sign Up</button>
                                        <div className="hr-text">
                                            <span>Or</span>
                                        </div>
                                    </form>
                                    <div className="google-container">
                                        <GoogleLogin
                                            onSuccess={handleGoogleSuccess}
                                            onFailure={handleGoogleSuccess}
                                            className="google-auth"
                                        />
                                    </div>
                                    <div className="terms-conditions">By signing up you are agree to our <span>terms n conditions</span></div>
                                </div>
                            </div>
                            <div className="auth-image">
                                <img src={SignUpImg} alt="Car Sound" />
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
