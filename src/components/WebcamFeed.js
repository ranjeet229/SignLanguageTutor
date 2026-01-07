import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { loadHandposeModel, detectHand } from "../ai/handposeModel";
import HandCanvas from "./HandCanvas";
import { detectLetter } from "../utils/gestureLogic";

const WIDTH = 640;
const HEIGHT = 480;

const WebcamFeed = () => {
  const webcamRef = useRef(null);

  const [predictions, setPredictions] = useState([]);
  const [currentLetter, setCurrentLetter] = useState("A");
  const [isCorrect, setIsCorrect] = useState(null);

  // Load AI model & start detection loop
  useEffect(() => {
    loadHandposeModel();

    const interval = setInterval(() => {
      runHandDetection();
    }, 100);

    return () => clearInterval(interval);
  }, [currentLetter]);

  // Auto move to next letter when correct
  useEffect(() => {
    if (isCorrect === true) {
      const timeout = setTimeout(() => {
        const nextChar = String.fromCharCode(
          currentLetter.charCodeAt(0) + 1
        );

        if (nextChar <= "Z") {
          setCurrentLetter(nextChar);
        }

        setIsCorrect(null);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isCorrect, currentLetter]);

  // Main detection logic
  const runHandDetection = async () => {
    if (webcamRef.current && webcamRef.current.video) {
      const video = webcamRef.current.video;
      const hands = await detectHand(video);
      setPredictions(hands);

      if (hands.length > 0) {
        const landmarks = hands[0].landmarks;
        const result = detectLetter(landmarks, currentLetter);
        setIsCorrect(result);
      } else {
        setIsCorrect(null);
      }
    }
  };

  return (
    <>
      {/* Target Letter */}
      <h2 style={{ textAlign: "center" }}>
        Show Letter: <span>{currentLetter}</span>
      </h2>

      {/* Feedback */}
      {isCorrect !== null && (
        <h3
          style={{
            textAlign: "center",
            color: isCorrect ? "green" : "red",
          }}
        >
          {isCorrect ? "Correct ✅" : "Wrong ❌"}
        </h3>
      )}

      {/* Webcam + Canvas */}
      <div
        style={{
          position: "relative",
          width: WIDTH,
          height: HEIGHT,
          margin: "0 auto",
          border:
            isCorrect === null
              ? "4px solid black"
              : isCorrect
              ? "4px solid green"
              : "4px solid red",
        }}
      >
        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored={true}
          style={{
            width: WIDTH,
            height: HEIGHT,
            position: "absolute",
            zIndex: 1,
          }}
        />

        <HandCanvas
          predictions={predictions}
          width={WIDTH}
          height={HEIGHT}
        />
      </div>
    </>
  );
};

export default WebcamFeed;
