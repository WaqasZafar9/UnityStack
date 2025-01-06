import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/vector.png";
import GoogleSvg from "../assets/icons8-google.svg";
import LinkedInSvg from "../assets/linkedin.png";
import LoginPic from "../assets/loginpic.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="d-flex flex-column flex-md-row vh-100">
      {/* Left Section - Form */}
      <div
        className="col-12 col-md-6 d-flex justify-content-center align-items-center"
        style={{
          overflowY: "hidden",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          className="w-75 shadow"
          style={{
            borderRadius: "30px", // Rounded form corners
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          {/* Logo */}
          <div className="text-center mb-3">
            <img
              src={Logo}
              alt="Logo"
              className="img-fluid"
              style={{
                maxWidth: "25%",
              }}
            />
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-4" style={{ marginTop: "10px" }}>
            <h2 className="mb-2" style={{ fontSize: "3rem" }}>
              Welcome back!
            </h2>
            <p className="text-muted" style={{ fontSize: "1.5rem" }}>
              Please enter your details
            </p>

            {/* Social Login Options */}
            <div className="d-flex justify-content-center gap-4 mt-3">
              <a
                href="#"
                className="d-flex align-items-center shadow p-3 rounded"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  gap: "8px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "50px", // Rounded edges
                }}
              >
                <img
                  src={GoogleSvg}
                  alt="Google"
                  style={{ maxWidth: "30px" }}
                />
                <span>Login with Google</span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center shadow p-3 rounded"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  gap: "8px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "50px", // Rounded edges
                }}
              >
                <img
                  src={LinkedInSvg}
                  alt="LinkedIn"
                  style={{ maxWidth: "30px" }}
                />
                <span>Login with LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Login Form */}
          <form>
            {/* Email Input */}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-3 position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="position-absolute"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Options */}
            <div
              className="d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row gap-2"
              style={{ fontSize: "1.3rem" }}
            >
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember-checkbox"
                />
                <label className="form-check-label" htmlFor="remember-checkbox">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="btn btn-link p-0 text-decoration-none"
              >
                Forgot password?
              </button>
            </div>

            {/* Buttons */}
            <div className="d-grid gap-3">
              {/* Log In Button */}
              <button
                type="submit"
                className="btn mx-auto"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  border: "none",
                  width: "50%", // Reduced width
                }}
              >
                Log In
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <button
              type="button"
              className="btn btn-link text-decoration-none"
            >
              <a href="/optionsighn">
              Sign Up
              </a>
            </button>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div
        className="col-md-6 d-none d-md-flex justify-content-center align-items-center position-relative"
        style={{
          backgroundImage: `url(${LoginPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="position-absolute"
          style={{
            bottom: "20px",
            left: "20px",
            textAlign: "left",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
