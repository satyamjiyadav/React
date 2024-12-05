import React, { useState } from "react";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

const ImageSlider = () => {
  const images = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <div>
        <img
          src={images[currentIndex]}
          // alt={`Slide ${currentIndex + 1}`}
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <span>
          {currentIndex + 1} / {images.length}
        </span>
      </div>
      <button onClick={prevImage}>Prev</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageSlider;
