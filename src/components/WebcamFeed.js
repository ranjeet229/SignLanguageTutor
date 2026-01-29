import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { loadHandposeModel, detectHand } from "../ai/handposeModel";
import HandCanvas from "./HandCanvas";
import { detectLetter } from "../utils/gestureLogic";

const WebcamFeed = () => {
  const webcamRef = useRef(null);

  const [predictions, setPredictions] = useState([]);
  const [currentLetter, setCurrentLetter] = useState("A");
  const [isCorrect, setIsCorrect] = useState(null);

  const runHandDetection = useCallback(async () => {
    if (webcamRef.current?.video) {
      const hands = await detectHand(webcamRef.current.video);
      setPredictions(hands);

      if (hands.length > 0) {
        const result = detectLetter(hands[0].landmarks, currentLetter);
        setIsCorrect(result);
      } else {
        setIsCorrect(null);
      }
    }
  }, [currentLetter]);

  useEffect(() => {
    loadHandposeModel();

    const interval = setInterval(runHandDetection, 120);
    return () => clearInterval(interval);
  }, [runHandDetection]);

  useEffect(() => {
    if (isCorrect === true) {
      const timeout = setTimeout(() => {
        const nextChar = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
        if (nextChar <= "Z") setCurrentLetter(nextChar);
        setIsCorrect(null);
      }, 900);

      return () => clearTimeout(timeout);
    }
  }, [isCorrect, currentLetter]);

  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Letter prompt */}
      <h2 style={{ margin: "4px 0" }}>
        Show Letter: <span>{currentLetter}</span>
      </h2>

      {/* Feedback */}
      {isCorrect !== null && (
        <h3
          style={{
            margin: "4px 0",
            color: isCorrect ? "green" : "red",
          }}
        >
          {isCorrect ? "Correct ✅" : "Wrong ❌"}
        </h3>
      )}

      {/* Webcam Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          aspectRatio: "4 / 3",
          border:
            isCorrect === null
              ? "3px solid black"
              : isCorrect
                ? "3px solid green"
                : "3px solid red",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        <HandCanvas predictions={predictions} width={520} height={390} />
      </div>
    </div>
  );
};

export default WebcamFeed;
