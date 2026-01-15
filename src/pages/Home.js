import React from "react";
import WebcamFeed from "../components/WebcamFeed";

const Home = () => {
  return (
    <div>
      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "700",
          color: "#00ffcc",
          marginTop: "30px",
          marginBottom: "10px",
          letterSpacing: "1px",
        }}
      >
        Sign Language Tutor
      </h1>

      {/* Description */}
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#cfd8dc",
          marginBottom: "25px",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.6",
        }}
      >
        
        Show the correct hand gesture and get instant feedback in real time.
      </p>

      {/* Webcam (UNCHANGED) */}
      <WebcamFeed />
    </div>
  );
};

export default Home;
