import React, { useRef, useEffect, useState } from "react";

const JustifiedText = ({ text, className }) => {
  const textRef = useRef(null);
  const [viewBox, setViewBox] = useState(null);
  const [opacity, setOpacity] = useState(0);
  const PADDING = window.innerWidth < 768 ? 0.5 : 1;

  const measure = () => {
    if (textRef.current) {
      try {
        const bbox = textRef.current.getBBox();
        if (bbox.width > 0 && bbox.height > 0) {
          setViewBox(
            `${bbox.x - PADDING} ${bbox.y - PADDING} ${bbox.width + PADDING * 2} ${bbox.height + PADDING * 2}`,
          );
          setOpacity(1);
        }
      } catch (e) {}
    }
  };

  useEffect(() => {
    measure();
    if (document.fonts) {
      document.fonts.load('1em "BabySchool"').then(() => measure());
      document.fonts.ready.then(measure);
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text]);

  return (
    <div
      className={className}
      style={{
        width: "100%",
        lineHeight: 0,
        display: "flex",
        justifyContent: "center",
        marginBottom: "2px",
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          maxHeight:
            window.innerWidth < 768
              ? "clamp(1.9rem, 6vw, 2.2rem)"
              : "clamp(2rem, 8vw, 8vh)",
          opacity: opacity,
          transition: "opacity 0.2s ease-in",
        }}
      >
        <text
          ref={textRef}
          x="0"
          y="0"
          dominantBaseline="hanging"
          style={{
            fontFamily: '"BabySchool", sans-serif',
            textTransform: "uppercase",
            fill: "white",
            stroke: "rgba(0,0,0,0.65)",
            strokeWidth: window.innerWidth < 768 ? "2.4px" : "2px",
            paintOrder: "stroke fill",
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default JustifiedText;
