import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupImage from "../assets/student.png"; // Replace with the correct path to your image
import { FaGoogle } from "react-icons/fa"; // Import Google icon
import { SiGmail } from "react-icons/si"; // Import Gmail icon

const OptionSign = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    semester: "",
    domain: "",
    linkedIn: "",
    github: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div
      className="d-flex vh-100"
      style={{ backgroundColor: "#f8f9fa", overflow: "hidden" }}
    >
      {/* Left Side: Form */}
      <div
        className="d-flex flex-column p-4 position-relative"
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          margin: "20px",
          overflowY: "auto",
        }}
      >
        {/* Left Side Heading */}
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              marginBottom: "5px",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Student Register
          </h2>
          <div
            style={{
              width: "100px",
              height: "3px",
              backgroundColor: "#007bff",
              borderRadius: "3px",
            }}
          ></div>
        </div>

        {/* Form Content */}
        <div className="d-flex flex-column justify-content-center align-items-center">
          
          <form
            style={{ width: "100%", maxWidth: "400px" }}
            onSubmit={handleSubmit}
          >
            {/* Name Fields */}
            <div className="d-flex gap-3 mb-3">
              <input
                type="text"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
              <input
                type="text"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>

            {/* University Field */}
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${
                  errors.university ? "is-invalid" : ""
                }`}
                placeholder="Your University"
                name="university"
                value={formData.university}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>

            {/* Semester Field */}
            <div className="mb-3">
              <select
                className={`form-control ${
                  errors.semester ? "is-invalid" : ""
                }`}
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              >
                <option value="">Select Semester</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <option key={sem} value={sem}>
                    {sem}
                  </option>
                ))}
              </select>
            </div>

            {/* Domain Field */}
            <div className="mb-3">
              <select
                className={`form-control ${errors.domain ? "is-invalid" : ""}`}
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              >
                <option value="">Select Your Domain</option>
                {["Web Development", ".NET", "AI", "Data Science"].map(
                  (domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* LinkedIn and GitHub Fields */}
            <div className="d-flex gap-3 mb-3">
              <input
                type="text"
                className={`form-control ${
                  errors.linkedIn ? "is-invalid" : ""
                }`}
                placeholder="LinkedIn Profile"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
              <input
                type="text"
                className={`form-control ${errors.github ? "is-invalid" : ""}`}
                placeholder="GitHub Profile"
                name="github"
                value={formData.github}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>

            {/* Password Fields */}
            <div className="mb-3">
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>

            {/* Checkbox */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="newsPromo"
              />
              <label className="form-check-label" htmlFor="newsPromo">
                Send me news and promotions
              </label>
            </div>

            {/* Create Account Button */}
            <button
              className="btn btn-primary w-100 mb-3"
              style={{ borderRadius: "5px" }}
              type="submit"
            >
              Create account
            </button>
          </form>
<p className="text-center text-muted mb-4">or register with </p>
          {/* Sign In with Google and Gmail */}
          <div className="d-flex flex-column align-items-center mt-3">
            <button
              className="btn btn-outline-primary d-flex align-items-center mb-2"
              style={{ width: "100%", maxWidth: "400px", borderRadius: "5px" }}
            >
              <FaGoogle style={{ marginRight: "10px" }} />
              Sign in with Google
            </button>
            <button
              className="btn btn-outline-danger d-flex align-items-center"
              style={{ width: "100%", maxWidth: "400px", borderRadius: "5px" }}
            >
              <SiGmail style={{ marginRight: "10px" }} />
              Sign in with Gmail
            </button>
          </div>

          {/* Terms and Conditions */}
          <small className="text-center d-block text-muted mt-3">
            By continuing, I agree with the{" "}
            <a href="/terms" style={{ color: "#007bff" }}>
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" style={{ color: "#007bff" }}>
              Privacy Policy
            </a>
          </small>
        </div>
      </div>

      {/* Right Side: Image */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          flex: 1,
          backgroundColor: "#e9ecef",
        }}
      >
        <img
          src={SignupImage}
          alt="Sign Up"
          style={{
            width: "80%",
            height: "90%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default OptionSign;
