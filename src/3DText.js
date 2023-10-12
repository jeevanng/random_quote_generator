import React, { useEffect } from 'react';
import './3DText.css';

function ThreeDText() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rXP = e.clientX - e.target.offsetLeft - e.target.offsetWidth / 2;
      const rYP = e.clientY - e.target.offsetTop - e.target.offsetHeight / 2;
      e.target.style.textShadow = `${rYP / 10}px ${rXP / 80}px rgba(227, 6, 19, 0.8), ${rYP / 8}px ${rXP / 60}px rgba(255, 237, 0, 1), ${rXP / 70}px ${rYP / 12}px rgba(0, 159, 227, 0.7)`;
    };

    const h1 = document.getElementById('threedtext');
    if (h1) {
      h1.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (h1) {
        h1.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return <h1 id="threedtext">QUOTE GENERATOR</h1>;
}

export default ThreeDText;