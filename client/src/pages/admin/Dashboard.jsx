import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div
      style={{
        padding: "40px",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          color: "#2c3e50",
          marginBottom: "50px",
        }}
      >
        📚 Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          marginBottom: "50px",
        }}
      >
        {/* Books */}
        <div
          style={{
            background: "linear-gradient(135deg, #4facfe, #00f2fe)",
            borderRadius: "18px",
            padding: "25px",
            color: "white",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "22px" }}>📚 Books</h3>

          <h1 style={{ fontSize: "42px", margin: "15px 0" }}>
            Collection
          </h1>

          <p>Manage your bookstore collection</p>
        </div>

        {/* Categories */}
        <div
          style={{
            background: "linear-gradient(135deg,#43e97b,#38f9d7)",
            borderRadius: "18px",
            padding: "25px",
            color: "white",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "22px" }}>📂 Categories</h3>

          <h1 style={{ fontSize: "50px", margin: "15px 0" }}>6</h1>

          <p>Available Categories</p>
        </div>

        {/* Orders */}
        <div
          style={{
            background: "linear-gradient(135deg,#fa709a,#fee140)",
            borderRadius: "18px",
            padding: "25px",
            color: "white",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "22px" }}>🛒 Orders</h3>

          <h2 style={{ fontSize: "34px", margin: "20px 0" }}>
            Coming Soon
          </h2>

          <p>Online ordering module</p>
        </div>

        {/* Users */}
        <div
          style={{
            background: "linear-gradient(135deg,#667eea,#764ba2)",
            borderRadius: "18px",
            padding: "25px",
            color: "white",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "22px" }}>👤 Users</h3>

          <h2 style={{ fontSize: "34px", margin: "20px 0" }}>
            Registered
          </h2>

          <p>Manage registered users</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link to="/admin/add-book">
          <button
            style={{
              padding: "15px 25px",
              border: "none",
              borderRadius: "30px",
              background: "#198754",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ➕ Add New Book
          </button>
        </Link>

        <Link to="/books">
          <button
            style={{
              padding: "15px 25px",
              border: "none",
              borderRadius: "30px",
              background: "#0d6efd",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            📚 Manage Books
          </button>
        </Link>

        <Link to="/cart">
          <button
            style={{
              padding: "15px 25px",
              border: "none",
              borderRadius: "30px",
              background: "#fd7e14",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            🛒 View Cart
          </button>
        </Link>

        <Link to="/">
          <button
            style={{
              padding: "15px 25px",
              border: "none",
              borderRadius: "30px",
              background: "#6f42c1",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            🏠 Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;