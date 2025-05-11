import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup({
  apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3002/signup",
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
                <h2 className="text-primary">Create Your Account</h2>
                <p className="text-muted">
                  Join Pakistan's Premier Trading Platform
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="form-control"
                    placeholder="user@example.com"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Pakistan Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    className="form-control"
                    placeholder="03001234567"
                    onChange={handleOnChange}
                    pattern="[0-9]{11}"
                    title="11-digit Pakistan mobile number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    className="form-control"
                    placeholder="Choose a username"
                    onChange={handleOnChange}
                    minLength="3"
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
                    placeholder="Create a password"
                    onChange={handleOnChange}
                    minLength="6"
                    required
                  />
                  <small className="text-muted">Minimum 6 characters</small>
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
                        Creating Account...
                      </>
                    ) : (
                      "Sign Up for Free"
                    )}
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-muted mb-0">
                    Already have an account?{" "}
                    <Link
                      to={loginPath}
                      className="text-decoration-none text-primary"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        <ToastContainer />
    </div>
  );
}

export default Signup;
