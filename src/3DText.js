import React, { useEffect } from 'react';
import './3DText.css';

function ThreeDText() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rXP = (e.clientX - window.innerWidth / 2) / 5;
      const rYP = (e.clientY - window.innerHeight / 2) / 5;
      const h1 = document.getElementById('threedtext');

      if (h1) {
        h1.style.textShadow = `${rYP / 10}px ${rXP / 80}px rgba(227, 6, 19, 0.8), ${rYP / 8}px ${rXP / 60}px rgba(255, 237, 0, 1), ${rXP / 70}px ${rYP / 12}px rgba(0, 159, 227, 0.7)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <h1 id="threedtext">THE GROTTO</h1>;
}

export default ThreeDText;