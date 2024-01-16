// components/FocusComponent.js
import { useEffect } from 'react';

const FocusComponent = () => {
  const handleMouseMove = (e: { pageX: any; pageY: any; }) => {
    let x = e.pageX;
    let y = e.pageY;

    const focus = document.querySelector('.focus') as HTMLElement;
    if (focus) {
      // Adjust the transparent percentage to make the radial background smaller
      const transparentPercentage = 24; // Change this value as needed
      focus.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent ${transparentPercentage}%)`;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default FocusComponent;
