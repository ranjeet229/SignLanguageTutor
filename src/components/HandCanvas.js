import React from "react";

const HandCanvas = ({ predictions }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (predictions.length > 0) {
      predictions.forEach((prediction) => {
        const landmarks = prediction.landmarks;

        // Draw points
        for (let i = 0; i < landmarks.length; i++) {
          const [x, y] = landmarks[i];
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 3 * Math.PI);
          ctx.fillStyle = "red";
          ctx.fill();
        }

        drawConnections(ctx, landmarks);
      });
    }
  }, [predictions]);

  return (
    <canvas
      ref={canvasRef}
      width={640}
      height={480}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
      }}
    />
  );
};

const drawConnections = (ctx, landmarks) => {
  const connections = [
    [0, 1, 2, 3, 4],       // Thumb
    [0, 5, 6, 7, 8],       // Index
    [0, 9, 10, 11, 12],    // Middle
    [0, 13, 14, 15, 16],   // Ring
    [0, 17, 18, 19, 20],   // Pinky
  ];

  ctx.strokeStyle = "green";
  ctx.lineWidth = 2;

  connections.forEach((finger) => {
    ctx.beginPath();
    finger.forEach((pointIndex, index) => {
      const [x, y] = landmarks[pointIndex];
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
  });
};

export default HandCanvas;
