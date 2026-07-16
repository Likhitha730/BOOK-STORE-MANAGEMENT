import { useWishlist } from "../context/WishlistContext";
import BookCard from "../components/BookCard";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div style={{ padding: "30px" }}>
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>No books in wishlist.</h2>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {wishlist.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;