import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import AddBook from "./pages/admin/AddBook";
import EditBook from "./pages/admin/EditBook";
import Wishlist from "./pages/Wishlist";
function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        style={{
          minHeight: "80vh",
          background: "#f8f9fa",
        }}
      >
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Books */}
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Shopping Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Admin */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/add-book" element={<AddBook />} />
          <Route path="/admin/edit-book/:id" element={<EditBook />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;