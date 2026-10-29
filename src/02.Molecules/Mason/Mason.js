import React from 'react';
import './Mason.css';

const images = [/* array of image URLs from your folder */];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <div key={index} className="gallery-item">
          <img src={src} alt={`Gallery item ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
