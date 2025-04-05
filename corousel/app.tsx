import React, { useState, useEffect } from "react";
import "./styles.css";

interface CarouselItem {
  id: number;
  content: string;
}

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items: CarouselItem[] = [
    {
      id: 1,
      content:
        "https://png.pngtree.com/png-vector/20221025/ourmid/pngtree-navigation-bar-3d-search-url-png-image_6360655.png",
    },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    // Add more items as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Auto rotate every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.content} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default App;

