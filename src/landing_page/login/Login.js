import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = ({

  apiUrl = `${process.env.REACT_APP_API_URL}/login`,
  redirectUrl = process.env.REACT_APP_REDIRECT_URL,
}) => {

  const navigate = useNavigate();
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
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm border-accent">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img
                  src="media/images/logos.svg"
                  alt="BazaarX Logo"
                  className="mb-3"
                  style={{ height: "50px" }}
                />
                <h2 className="text-primary">Welcome to BazaarX</h2>
                <p className="text-muted">
                  Pakistan's Premier Trading Platform
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email or Phone (Pakistan)
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    className="form-control"
                    placeholder="e.g. user@example.com or 03001234567"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                    required
                    minLength="6"
                  />
                </div>
                <div className="d-grid mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary py-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Logging in...
                      </>
                    ) : (
                      "Login to Your Account"
                    )}
                  </button>
                </div>
                <div className="text-center">
                  <Link
                    to="/forgot-password"
                    className="text-decoration-none text-accent"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted mb-0">New to BazaarX?</p>
                <Link to="/signup" className="btn btn-outline-primary mt-2">
                  Create Free Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
