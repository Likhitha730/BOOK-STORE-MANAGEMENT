function Footer() {
    return (
      <footer
        style={{
          background: "#1f2937",
          color: "white",
          padding: "40px 20px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          <div>
            <h2>📚 InspireBook Store</h2>
            <p>
              Helping readers discover inspiring books for personal growth,
              success and lifelong learning.
            </p>
          </div>
  
          <div>
            <h3>Quick Links</h3>
            <p>🏠 Home</p>
            <p>📚 Books</p>
            <p>🛒 Cart</p>
            <p>👤 Login</p>
          </div>
  
          <div>
            <h3>Contact</h3>
            <p>📧 inspirebook@gmail.com</p>
            <p>📞 +91 9876543210</p>
            <p>📍 Bhimavaram, Andhra Pradesh</p>
          </div>
        </div>
  
        <hr
          style={{
            margin: "30px 0",
            borderColor: "#444",
          }}
        />
  
        <p
          style={{
            textAlign: "center",
          }}
        >
          © 2026 InspireBook Store | MERN Stack Project
        </p>
      </footer>
    );
  }
  
  export default Footer;