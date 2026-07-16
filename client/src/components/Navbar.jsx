import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "600",
    transition: "0.3s",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          📚 InspireBook
        </h2>
      </Link>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Home
        </Link>

        <Link
          to="/books"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Books
        </Link>

        <Link
          to="/cart"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          🛒 Cart
        </Link>

        <Link
          to="/wishlist"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          ❤️ Wishlist
        </Link>

        <Link
          to="/admin"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Admin
        </Link>

        {!user ? (
          <>
            <Link
              to="/login"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <span
              style={{
                color: "#FFD700",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              👋 Welcome, {user.name}
            </span>

            <button
              onClick={handleLogout}
              style={{
                padding: "10px 18px",
                border: "none",
                borderRadius: "25px",
                background: "#dc3545",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;