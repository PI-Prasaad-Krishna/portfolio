import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .cursor-pointer')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      style={{
        translateX: position.x - 16, // Center the cursor
        translateY: position.y - 16,
      }}
      animate={{
        width: isHovering ? 48 : 32,
        height: isHovering ? 48 : 32,
        border: isHovering ? '2px solid #8b5cf6' : '2px solid white',
        backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;