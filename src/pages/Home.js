import React from "react";
import WebcamFeed from "../components/WebcamFeed";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        boxSizing: "border-box",
        paddingBottom: "48px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "38px",
          fontWeight: "700",
          color: "#00ffcc",
          marginTop: "20px",
          marginBottom: "6px",
          letterSpacing: "1px",
          flexShrink: 0,
        }}
      >
        Sign Language Tutor
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "16px",
          color: "#cfd8dc",
          marginBottom: "16px",
          maxWidth: "650px",
          lineHeight: "1.5",
          flexShrink: 0,
        }}
      >
        Show the correct hand gesture, wait until AI detects your hand and get
        instant feedback in real time.
      </p>

      {/* Webcam container */}
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <WebcamFeed />
      </div>
    </div>
  );
};

export default Home;
