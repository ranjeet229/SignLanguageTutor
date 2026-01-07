import React from "react";
import WebcamFeed from "../components/WebcamFeed";

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Sign Language Tutor 
      </h1>

      <WebcamFeed />
    </div>
  );
};

export default Home;
