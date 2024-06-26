"use client";
import { useState, useRef, useEffect } from "react";

export default function SpinnerWheel({ names }) {
  const canvasRef = useRef(null);
  const [selectedName, setSelectedName] = useState(null);

 
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const drawWheel = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const arcSize = (2 * Math.PI) / names.length;
    const radius = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    names.forEach((name, index) => {
      const angle = index * arcSize;
      const color = getRandomColor();

      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.moveTo(radius, radius);
      ctx.arc(radius, radius, radius, angle, angle + arcSize);
      ctx.fill();

      ctx.save();
      ctx.translate(
        radius + Math.cos(angle + arcSize / 2) * radius * 0.75,
        radius + Math.sin(angle + arcSize / 2) * radius * 0.75
      );
      ctx.rotate(angle + arcSize / 2 + Math.PI / 2);
      ctx.fillStyle = "#000";
      ctx.fillText(name, -ctx.measureText(name).width / 2, 0);
      ctx.restore();
    });
  };

  const spinWheel = () => {
    const canvas = canvasRef.current;
    const duration = 3000;
    const endRotation = Math.random() * 360 + 1080;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeOutProgress = Math.pow(progress, 3);

      canvas.style.transform = `rotate(${endRotation * easeOutProgress}deg)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const finalAngle = endRotation % 360;
        const arcSize = 360 / names.length;
        const selectedIndex =
          Math.floor((360 - finalAngle) / arcSize) % names.length;
        setSelectedName(names[selectedIndex]);
      }
    };

    animate();
  };

  useEffect(() => {
    drawWheel();
  }, [names]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ transition: "transform 4s ease-out", border: "none" }}
      />
      <button
        onClick={() => {
          spinWheel();
        }}
        className="bg-blue-500 text-white px-5 py-2 rounded-md"
      >
        Spin
      </button>
      {selectedName && (
        <div className="text-green-500 font-semibold">
          The winner is: {selectedName}
        </div>
      )}

      {/* <div className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full">
        {" "}
      </div> */}
      <div className="absolute top-[45%] right-0 transform -translate-x-1/2 translate-y-[-50%] w-2 h-14 rounded-md rotate-90 bg-red-600"></div>
    </div>
  );
}
