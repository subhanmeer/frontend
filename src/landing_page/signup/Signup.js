import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css";

function Signup({
  apiUrl = `${process.env.REACT_APP_API_URL}/signup`,
  loginPath = "/login",
}) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const { email, password, username, phone } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const showError = (err) =>
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
    });

  const showSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!email && !phone) {
      showError("Please provide either email or phone number");
      setIsLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(
        apiUrl,
        {
          ...inputValue,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { success, message } = data;
      if (success) {
        showSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        showError(message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      showError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
      setInputValue((prev) => ({
        ...prev,
        password: "", // Clear only password for security
      }));
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Header */}
        <div className="signup-header">
          <div className="logo-container">
            <img
              src="media/images/logos.svg"
              alt="BazaarX Logo"
              className="signup-logo"
            />
          </div>
          <h2 className="signup-title">Create Your Account</h2>
          <p className="signup-subtitle">Join Pakistan's Premier Trading Platform</p>
        </div>
        
        {/* Form */}
        <div className="signup-body">
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-user icon"></i>
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                className="form-input"
                placeholder="Choose a username"
                onChange={handleOnChange}
                minLength="3"
                required
              />
              <span className="helper-text">Minimum 3 characters</span>
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-envelope icon"></i>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-input"
                placeholder="user@example.com"
                onChange={handleOnChange}
              />
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-phone icon"></i>
                Pakistan Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                value={phone}
                className="form-input"
                placeholder="03001234567"
                onChange={handleOnChange}
                pattern="[0-9]{11}"
                title="11-digit Pakistan mobile number"
              />
              <span className="helper-text">Provide either email or phone number</span>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-lock icon"></i>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-input"
                placeholder="Create a password"
                onChange={handleOnChange}
                minLength="6"
                required
              />
              <span className="helper-text">Minimum 6 characters</span>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className={`signup-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  <i className="fas fa-user-plus icon"></i>
                  Sign Up for Free
                </>
              )}
            </button>

            {/* Login Link */}
            <div className="login-link">
              <p>
                Already have an account?{" "}
                <Link to={loginPath}>
                  Login Here
                </Link>
              </p>
            </div>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>WELCOME TO BAZAARX</span>
          </div>

          {/* Terms */}
          <div className="terms-text">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;