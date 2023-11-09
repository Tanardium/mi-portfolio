import React, { useState, useEffect } from "react";

const TypingTitle = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textLength = text.length;
    const typingSpeed = 100; // Velocidad de escritura en milisegundos

    const typingInterval = setInterval(() => {
      if (index <= textLength) {
        setDisplayedText(text.slice(0, index));
        setIndex(index + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, index]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "2em", color: "#333", margin: 0 }}>
        {displayedText}
      </h1>
    </div>
  );
};

export default TypingTitle;
