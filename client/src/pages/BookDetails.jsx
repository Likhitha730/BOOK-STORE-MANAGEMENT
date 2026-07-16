import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import BookCard from "../components/BookCard";

function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBook();
    fetchBooks();
  }, [id]);

  const fetchBook = async () => {
    try {
      const res = await API.get(`/books/${id}`);
      setBook(res.data.book);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  if (!book) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading...
      </h2>
    );
  }

  const relatedBooks = books
    .filter(
      (b) =>
        b.category === book.category &&
        b._id !== book._id
    )
    .slice(0, 4);

  return (
    <div style={{ padding: "40px" }}>
      {/* Book Details */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          marginBottom: "60px",
        }}
      >
        <img
          src={book.image}
          alt={book.title}
          style={{
            width: "320px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          }}
        />

        <div>
          <h1>{book.title}</h1>

          <h3>✍ Author : {book.author}</h3>

          <h3>📚 Category : {book.category}</h3>

          <h2 style={{ color: "green" }}>
            ₹ {book.price}
          </h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "30px",
              fontSize: "18px",
            }}
          >
            {book.description}
          </p>

          <h3>📦 Stock : {book.stock}</h3>

          <button
            style={{
              padding: "12px 25px",
              marginTop: "20px",
              marginRight: "15px",
              background: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            🛒 Add to Cart
          </button>

          <button
            style={{
              padding: "12px 25px",
              marginTop: "20px",
              background: "crimson",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ❤️ Add to Wishlist
          </button>
        </div>
      </div>

      {/* Related Books */}
      <div>
        <h2
          style={{
            marginBottom: "25px",
            color: "#2c3e50",
          }}
        >
          📚 You May Also Like
        </h2>

        {relatedBooks.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {relatedBooks.map((item) => (
              <BookCard key={item._id} book={item} />
            ))}
          </div>
        ) : (
          <p>No related books available.</p>
        )}
      </div>
    </div>
  );
}

export default BookDetails;