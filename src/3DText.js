import React, { useEffect } from 'react';
import './styling/3DText.css';

function ThreeDText() {  
    // componentDidMount equivalent 
    useEffect(() => {
        const handleMouseMove = (event) => {
            // clientX returns horizontal client coordinate of the mouse pointer when a mouse event occurs. 
            // clientY returns vertical 
            // window.innerWidth represents the width of the window
            // window.innerHeight represents the height
            // (event.clientX - window.innerWidth) and (event.clientX - window.innerHeight) will calculate the distance
            // of the mouse cursor from the top-left window corner
            // We divide by 2, because this moves the system's origin to (0,0), the centre of the window. 
            // This gives us positive values when the mouse is to the right or below the center
            // Negatie values when it's to the left or above the centre.
            const rXP = (event.clientX - window.innerWidth / 2);
            const rYP = (event.clientY - window.innerHeight / 2);

            // Get the element Id with 'threedtext"
            const h1 = document.getElementById('threedtext');

    // if (h1) is true. Should be because we return a h1 with 'threedtext' id
    if (h1) {
        // textShadow property of the h1 element to create text shadow effect

        // ${rYP / 10}px is the horizontal offset
        // ${rXP / 80}px is the vertical offset 
        // rgba(227, 6, 19, 0.8) is the colour red, with transparency set to 0.8
        // That is the first shadow completed
        // Repeat for two other shadows, yellow and blue. 

        // We use rYP and rXP, because this gives us dynamic changes. As the mouse moves, these values change, thus giving us a moving 3D shadow effect
        h1.style.textShadow = `${rYP / 10}px ${rXP / 80}px rgba(227, 6, 19, 0.8), ${rYP / 5}px ${rXP / 30}px rgba(255, 237, 0, 1), ${rXP / 70}px ${rYP / 12}px rgba(0, 159, 227, 0.7)`;
        }
    };

    // Add the event listener to the whole document. If added to the h1, it will only create the effect when mouse is on that element
    // Adding to the document means it tracks on the whole page
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function run when the component unmounts 
    // Remove event listener to prevent memory leaks when component unmounts
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
    };
}, []);

    // return the desired tag, element and id
    return <h1 id="threedtext">THE GROTTO</h1>;

}

export default ThreeDText;