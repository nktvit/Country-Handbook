import React, { useState, useEffect } from 'react';

const PhotoCollage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile devices
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allPhotos = Array.from({ length: 24 }, (_, i) => `photo_${String(i + 1).padStart(2, '0')}`);
  const photosToDisplay = isMobile ? allPhotos.slice(0, allPhotos.length / 2) : allPhotos;

  return (
    <div className="grid grid-cols-6 gap-1.5 absolute top-0 right-0 h1/4 md:h-1/2 w-full overflow-hidden">
      {photosToDisplay.map((photo, index) => (
        <div
          key={index}
          className="w-full h-20 overflow-hidden shadow-lg rounded-lg"
          style={{
            transform: "perspective(500px) rotateX(10deg) rotateY(10deg) rotateZ(-10deg)",
            transition: "transform 0.3s ease-in-out"
          }}
        >
          <img
            src={`./images/${photo}.jpg`}
            alt={`${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgb(241 245 249), transparent)' }}></div>
    </div>
  );
};

export default PhotoCollage;
