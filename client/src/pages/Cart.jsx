import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cart.map((book) => (
            <div
              key={book._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                marginTop: "20px",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <h4>₹{book.price}</h4>
              </div>

              <button
                onClick={() => removeFromCart(book._id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h2
            style={{
              marginTop: "30px",
            }}
          >
            Total : ₹{total}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;