import { useState, useEffect } from "react";
import "../styles/home.css"; // Only Home CSS applied

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="slider">
        <img src={images[currentIndex]} alt="Matrimony Slide" />
        <div className="text-overlay">
          <h1>Welcome to Atozas</h1>
          <p>Find your perfect match with us!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
