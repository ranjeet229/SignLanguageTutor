import { distance } from "./handMath";

export const getFingerStates = (landmarks) => {
  const palm = landmarks[0];

  const fingers = {
    thumb: distance(landmarks[4], landmarks[2]) > 30,
    index: distance(landmarks[8], palm) > 70,
    middle: distance(landmarks[12], palm) > 70,
    ring: distance(landmarks[16], palm) > 70,
    pinky: distance(landmarks[20], palm) > 60,
  };

  return fingers;
};
