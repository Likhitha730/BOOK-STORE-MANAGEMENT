import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HeroSlider() {
  const navigate = useNavigate();

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1600",
      title: "📚 InspireBook Store",
      subtitle: "Read Today. Lead Tomorrow.",
      description:
        "Discover books that inspire confidence, success, happiness, and personal growth.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600",
      title: "📖 Atomic Habits",
      subtitle: "Small Habits. Big Results.",
      description:
        "Build good habits, break bad ones, and transform your life one step at a time.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1600",
      title: "🧘 Think Like a Monk",
      subtitle: "Train Your Mind for Peace",
      description:
        "Learn mindfulness, discipline, and purpose to become the best version of yourself.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      style={{
        position: "relative",
        height: "550px",
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.8s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      ></div>

      {/* Glass Card */}
      <div
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "25px",
          padding: "45px",
          maxWidth: "720px",
          textAlign: "center",
          color: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <h1
          style={{
            fontSize: "54px",
            marginBottom: "20px",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          {slides[current].title}
        </h1>

        <h2
          style={{
            color: "#FFD54F",
            fontSize: "28px",
            marginBottom: "20px",
            textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
          }}
        >
          {slides[current].subtitle}
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "30px",
            color: "#f5f5f5",
            marginBottom: "35px",
          }}
        >
          {slides[current].description}
        </p>

        <button
          onClick={() => navigate("/books")}
          style={{
            padding: "15px 35px",
            background: "#ffc107",
            color: "#222",
            border: "none",
            borderRadius: "35px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            transition: "0.3s",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#ffca2c";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#ffc107";
            e.target.style.transform = "scale(1)";
          }}
        >
          📚 Explore Books
        </button>
      </div>

      {/* Navigation Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          display: "flex",
          gap: "12px",
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              width: current === index ? "18px" : "12px",
              height: current === index ? "18px" : "12px",
              borderRadius: "50%",
              background: current === index ? "#ffc107" : "white",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;