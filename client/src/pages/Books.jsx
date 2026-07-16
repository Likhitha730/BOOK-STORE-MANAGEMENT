import { useEffect, useState } from "react";
import API from "../services/api";
import BookCard from "../components/BookCard";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories
  const categories = [
    "All",
    "Motivation",
    "Self Help",
    "Psychology",
    "Productivity",
    "Finance",
    "Spiritual",
  ];

  useEffect(() => {
    fetchBooks();
  }, []);

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  // Filter books by search and category
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      book.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        📚 All Books
      </h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="🔍 Search by title, author or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "500px",
          display: "block",
          margin: "0 auto 25px",
          padding: "14px",
          borderRadius: "30px",
          border: "2px solid #0d6efd",
          outline: "none",
          fontSize: "16px",
        }}
      />

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              backgroundColor:
                selectedCategory === category ? "#0d6efd" : "#e9ecef",
              color: selectedCategory === category ? "#fff" : "#000",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))
        ) : (
          <h2
            style={{
              textAlign: "center",
              gridColumn: "1/-1",
            }}
          >
            😔 No books found.
          </h2>
        )}
      </div>
    </div>
  );
}

export default Books;