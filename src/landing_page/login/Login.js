import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css"; // Create this CSS file

const Login = ({

  apiUrl = `${process.env.REACT_APP_API_URL}/login`,
  redirectUrl = process.env.REACT_APP_REDIRECT_URL,
}) => {

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = inputValue;

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
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const showSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!email || !password) {
      showError("Please fill in all fields");
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

      const { success, message, user } = data;
      if (success) {
        showSuccess(message);
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        setTimeout(() => {
          window.location.href = redirectUrl; // Using react-router navigation instead of window.location
        }, 1500);
      } else {
        showError(message);
      }
    } catch (error) {
      console.error("Login error:", error);
      showError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
      setInputValue({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <div className="logo-container">
            <img
              src="media/images/logos.svg"
              alt="BazaarX Logo"
              className="login-logo"
            />
          </div>
          <h2 className="login-title">Welcome to BazaarX</h2>
          <p className="login-subtitle">Pakistan's Premier Trading Platform</p>
        </div>
        
        {/* Form */}
        <div className="login-body">
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-envelope icon"></i>
                Email or Phone (Pakistan)
              </label>
              <input
                type="text"
                name="email"
                value={email}
                className="form-input"
                placeholder="user@example.com or 03001234567"
                onChange={handleOnChange}
                required
              />
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
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
                minLength="6"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className={`login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Logging in...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-in-alt icon"></i>
                  Login to Your Account
                </>
              )}
            </button>

            {/* Forgot Password */}
            <div className="forgot-link">
              <Link to="/forgot-password">
                <i className="fas fa-question-circle icon"></i>
                Forgot Password?
              </Link>
            </div>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* Signup Section */}
          <div className="signup-section">
            <p className="signup-text">New to BazaarX?</p>
            <Link to="/signup" className="signup-btn">
              <i className="fas fa-user-plus icon"></i>
              Create Free Account
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
