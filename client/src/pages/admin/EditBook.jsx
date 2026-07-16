import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../services/api";

function EditBook() {
  const { id } = useParams();
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

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const res = await API.get(`/books/${id}`);
      setBook(res.data.book);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/books/${id}`, book);

      alert("Book Updated Successfully!");
      navigate("/books");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginBottom: "18px",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "35px",
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
        ✏️ Edit Book
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Book Title"
        />

        <input
          style={inputStyle}
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
        />

        <input
          style={inputStyle}
          name="category"
          value={book.category}
          onChange={handleChange}
          placeholder="Category"
        />

        <textarea
          style={{ ...inputStyle, height: "120px" }}
          name="description"
          value={book.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <input
          style={inputStyle}
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <input
          style={inputStyle}
          type="number"
          name="stock"
          value={book.stock}
          onChange={handleChange}
          placeholder="Stock"
        />

        <input
          style={inputStyle}
          name="image"
          value={book.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "12px",
            background: "#ff9800",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Update Book
        </button>
      </form>
    </div>
  );
}

export default EditBook;