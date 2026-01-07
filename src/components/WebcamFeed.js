import React, { useRef } from "react";
import Webcam from "react-webcam";

const WebcamFeed = () => {
  const webcamRef = useRef(null);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Show Sign to Camera </h2>

      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={true}
        style={{
          width: 400,
          height: 300,
          borderRadius: 10,
          border: "4px solid black",
        }}
        videoConstraints={{
          width: 400,
          height: 300,
          facingMode: "user",
        }}
      />
    </div>
  );
};

export default WebcamFeed;
