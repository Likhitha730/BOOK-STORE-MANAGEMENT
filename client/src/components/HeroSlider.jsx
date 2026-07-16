import { useEffect, useState } from "react";

function HeroSlider() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1600",
      title: "📚 InspireBook Store",
      subtitle: "Read today. Lead tomorrow.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600",
      title: "Atomic Habits",
      subtitle: "Small habits make a big difference.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1600",
      title: "Think Like a Monk",
      subtitle: "Train your mind for peace and success.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "500px",
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "0.8s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      <div
        style={{
          position: "relative",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "55px", marginBottom: "20px" }}>
          {slides[current].title}
        </h1>

        <h2 style={{ fontWeight: "normal" }}>
          {slides[current].subtitle}
        </h2>
      </div>
    </div>
  );
}

export default HeroSlider;