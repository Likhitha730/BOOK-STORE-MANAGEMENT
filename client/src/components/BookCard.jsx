import { Link } from "react-router-dom";
import API from "../services/api";
import { useCart } from "../context/CartContext";

function BookCard({ book }) {
  const { addToCart } = useCart();

  const deleteBook = async () => {
    const confirmDelete = window.confirm(
      `Delete "${book.title}"?`
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/books/${book._id}`);
      alert("Book deleted successfully!");
      window.location.reload();
    } catch (err) {
      alert("Unable to delete book.");
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <img
        src={
          book.image
            ? book.image
            : "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600"
        }
        alt={book.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h2
          style={{
            marginBottom: "10px",
            color: "#2c3e50",
          }}
        >
          {book.title}
        </h2>

        <p style={{ color: "#666" }}>
          ✍ <strong>{book.author}</strong>
        </p>

        <p>📚 {book.category}</p>

        <p
          style={{
            color: "#ff9800",
            fontWeight: "bold",
          }}
        >
          ⭐ 4.8
        </p>

        <p
          style={{
            color: "green",
            fontWeight: "bold",
          }}
        >
          ✅ In Stock
        </p>

        <h2
          style={{
            color: "#0d6efd",
          }}
        >
          ₹{book.price}
        </h2>

        <button
          onClick={() => {
            addToCart(book);
            alert("Book added to cart!");
          }}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            border: "none",
            borderRadius: "10px",
            background: "#198754",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🛒 Add to Cart
        </button>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <Link
            to={`/books/${book._id}`}
            style={{ flex: 1 }}
          >
            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#0d6efd",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              View
            </button>
          </Link>

          <Link
            to={`/admin/edit-book/${book._id}`}
            style={{ flex: 1 }}
          >
            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#ffc107",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
          </Link>

          <button
            onClick={deleteBook}
            style={{
              flex: 1,
              padding: "10px",
              background: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;