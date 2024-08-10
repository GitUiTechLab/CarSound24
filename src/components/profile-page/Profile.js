import React, { useState } from "react";
import "./Profile.css";
import Footer from "../footer-section/Footer";
import Header from "../header-section/Header";
import SubHeader from "../header-section/SubHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Profile() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [image, setImage] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VQvuRo4SyQr1uhvdXwmgJYYX5pj7Yr_qcw&s"
    );

    const previewFile = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!email) newErrors.email = "*Email is required";
        if (!fullname) newErrors.fullname = "*Full name is required";
        if (!mobile) newErrors.mobile = "*Mobile is required";
        if (!password) newErrors.password = "*Password is required";
        if (password !== confirmPassword)
            newErrors.confirmPassword = "*Passwords do not match";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully");
        }
    };

    const handleDeleteProfile = () => {
        console.log("Profile deleted successfully");
    };

    return (
        <div>
            <Header styleNavbar={"new-navbar"} />
            <SubHeader styleHeader={"new-subheader"} />
            <div className="profile-container">
                <h2>My Profile</h2>
                <div className="profile-form">
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div className="profile-pic">
                            <img
                                alt="User Pic"
                                src={image}
                                id="profile-image1"
                                height="200"
                                onClick={() =>
                                    document
                                        .getElementById("profile-image-upload")
                                        .click()
                                }
                            />
                            <input
                                id="profile-image-upload"
                                className="hidden"
                                type="file"
                                onChange={previewFile}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className="field-container">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={fullname}
                                    onChange={(e) =>
                                        setFullname(e.target.value)
                                    }
                                />
                                {errors.fullname && (
                                    <span className="error">
                                        {errors.fullname}
                                    </span>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Mobile</label>
                                <input
                                    type="text"
                                    placeholder="Mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                                {errors.mobile && (
                                    <span className="error">
                                        {errors.mobile}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="form-group">
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
                        <div className="field-container">
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    onClick={togglePasswordVisibility}
                                    className="passwordIcon"
                                />
                                {errors.password && (
                                    <span className="error">
                                        {errors.password}
                                    </span>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={
                                        showConfirmPassword ? faEyeSlash : faEye
                                    }
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="passwordIcon"
                                />
                                {errors.confirmPassword && (
                                    <span className="error">
                                        {errors.confirmPassword}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="form-actions">
                            <button type="submit">Save Changes</button>
                        </div>
                    </form>
                    <div
                        onClick={handleDeleteProfile}
                        className="delete-profile"
                    >
                        Delete Profile
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
