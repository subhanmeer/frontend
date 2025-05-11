import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Logout = ({
  apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000",
  loginPath = "/login",
}) => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const verifySession = async () => {
      if (!cookies.token) {
        navigate(loginPath);
        return;
      }
      try {
        const { data } = await axios.post(
          `${apiUrl}/verify-session`,
          {},
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        );

        const { status, user } = data;
        if (status) {
          setUser(user);
          toast.success(`Welcome back, ${user.username || user.email}`, {
            position: "top-right",
            autoClose: 3000,
          });
        } else {
          handleLogout();
        }
      } catch (error) {
        console.error("Session verification error:", error);
        handleLogout();
      } finally {
        setIsLoading(false);
      }
    };
    verifySession();
  }, [cookies, navigate, removeCookie, apiUrl, loginPath]);

  const handleLogout = async () => {
    try {
      // Call backend logout endpoint if needed
      await axios.post(
        `${apiUrl}/logout`,
        {},
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear client-side session
      removeCookie("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("sesssion");

      toast.info("You have been logged out successfully", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate(loginPath);
      }, 1000);
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-accent">
              <div className="card-body p-4 text-center">
                <img
                  src="media/images/logo.svg"
                  alt="BazaarX Logo"
                  className="mb-4"
                  style={{ height: "60px" }}
                />
                <h3 className="text-primary mb-4">
                السلام علیکم، <span className="text-accent">{user?.username || user?.email}</span>
                </h3>
                <p className="text-muted mb-4">
                You are currently logged in to your BazaarX account
                </p>

                <div className="d-grid gap-3">
                    <button
                    onClick={handleLogout}
                  className="btn btn-outline-primary py-2"
                    >
                        Logout from All Devices
                    </button>
                    <Link to="/dashboard" className="btn btn-primary py-2">
                  Go to Dashboard
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <ToastContainer />
    </>
  );
};

export default Logout;
