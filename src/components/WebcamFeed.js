import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { loadHandposeModel, detectHand } from "../ai/handposeModel";

const WebcamFeed = () => {
  const webcamRef = useRef(null);

  useEffect(() => {
    loadHandposeModel();

    const interval = setInterval(() => {
      runHandDetection();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const runHandDetection = async () => {
    if (
      webcamRef.current &&
      webcamRef.current.video
    ) {
      const video = webcamRef.current.video;
      const hands = await detectHand(video);

      if (hands.length > 0) {
        console.log("Hand detected:", hands[0].landmarks);
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Show Your Hand</h2>

      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={true}
        style={{
          width: 400,
          height: 300,
          border: "4px solid black",
          borderRadius: 10,
        }}
      />
    </div>
  );
};

export default WebcamFeed;
