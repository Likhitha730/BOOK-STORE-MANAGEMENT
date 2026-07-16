import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

function AddBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/books", book);

      alert("Book Added Successfully!");
      navigate("/books");
    } catch (error) {
      console.log(error);
      alert("Failed to add book");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    marginBottom: "18px",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "35px",
        background: "#ffffff",
        borderRadius: "18px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#2c3e50",
        }}
      >
        📚 Add New Book
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          required
        />

        <input
          style={inputStyle}
          type="text"
          name="author"
          placeholder="Author Name"
          value={book.author}
          onChange={handleChange}
          required
        />

        <input
          style={inputStyle}
          type="text"
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
          required
        />

        <textarea
          style={{
            ...inputStyle,
            height: "120px",
            resize: "none",
          }}
          name="description"
          placeholder="Book Description"
          value={book.description}
          onChange={handleChange}
        />

        <input
          style={inputStyle}
          type="number"
          name="price"
          placeholder="Price"
          value={book.price}
          onChange={handleChange}
          required
        />

        <input
          style={inputStyle}
          type="number"
          name="stock"
          placeholder="Stock"
          value={book.stock}
          onChange={handleChange}
          required
        />

        <input
          style={inputStyle}
          type="text"
          name="image"
          placeholder="Image URL"
          value={book.image}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "12px",
            background: "#4CAF50",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ➕ Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;