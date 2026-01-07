const TIPS = {
  thumb: 4,
  index: 8,
  middle: 12,
  ring: 16,
  pinky: 20,
};

const BASES = {
  thumb: 2,
  index: 5,
  middle: 9,
  ring: 13,
  pinky: 17,
};

const distance = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

const isFingerOpen = (landmarks, finger) =>
  landmarks[TIPS[finger]][1] < landmarks[BASES[finger]][1];

const isFingerClosed = (landmarks, finger) =>
  landmarks[TIPS[finger]][1] > landmarks[BASES[finger]][1];

export const detectLetter = (landmarks, letter) => {
  if (!landmarks || landmarks.length !== 21) return false;

  switch (letter) {
    case "A":
      return (
        isFingerClosed(landmarks, "index") &&
        isFingerClosed(landmarks, "middle") &&
        isFingerClosed(landmarks, "ring") &&
        isFingerClosed(landmarks, "pinky")
      );

    case "B":
      return (
        isFingerOpen(landmarks, "index") &&
        isFingerOpen(landmarks, "middle") &&
        isFingerOpen(landmarks, "ring") &&
        isFingerOpen(landmarks, "pinky") &&
        distance(landmarks[4], landmarks[2]) < 25
      );

    case "C":
      return (
        distance(landmarks[TIPS.index], landmarks[TIPS.thumb]) > 40 &&
        distance(landmarks[TIPS.middle], landmarks[0]) > 40
      );

    case "D":
      return (
        isFingerOpen(landmarks, "index") &&
        isFingerClosed(landmarks, "middle") &&
        isFingerClosed(landmarks, "ring") &&
        isFingerClosed(landmarks, "pinky")
      );

    case "E":
      return (
        isFingerClosed(landmarks, "index") &&
        isFingerClosed(landmarks, "middle") &&
        isFingerClosed(landmarks, "ring") &&
        isFingerClosed(landmarks, "pinky") &&
        distance(landmarks[TIPS.thumb], landmarks[TIPS.index]) < 30
      );

    case "F":
      return (
        distance(landmarks[TIPS.thumb], landmarks[TIPS.index]) < 25 &&
        isFingerOpen(landmarks, "middle")
      );

    case "G":
      return (
        isFingerOpen(landmarks, "index") && isFingerClosed(landmarks, "middle")
      );

    case "H":
      return (
        isFingerOpen(landmarks, "index") &&
        isFingerOpen(landmarks, "middle") &&
        isFingerClosed(landmarks, "ring")
      );

    case "I":
      return (
        isFingerOpen(landmarks, "pinky") &&
        isFingerClosed(landmarks, "index") &&
        isFingerClosed(landmarks, "middle")
      );

    case "J":
      return isFingerOpen(landmarks, "pinky");

    case "K":
      return (
        isFingerOpen(landmarks, "index") && isFingerOpen(landmarks, "middle")
      );

    case "L":
      return (
        isFingerOpen(landmarks, "index") &&
        isFingerOpen(landmarks, "thumb") &&
        isFingerClosed(landmarks, "middle")
      );

    case "M":
      return (
        isFingerClosed(landmarks, "index") &&
        isFingerClosed(landmarks, "middle") &&
        isFingerClosed(landmarks, "ring")
      );

    case "N":
      return (
        isFingerClosed(landmarks, "index") &&
        isFingerClosed(landmarks, "middle")
      );

    case "O":
      return distance(landmarks[TIPS.thumb], landmarks[TIPS.index]) < 25;

    case "P":
      return (
        isFingerOpen(landmarks, "index") &&
        landmarks[TIPS.index][1] > landmarks[BASES.index][1]
      );

    case "Q":
      return isFingerOpen(landmarks, "thumb");

    case "R":
      return (
        isFingerOpen(landmarks, "index") &&
        isFingerOpen(landmarks, "middle") &&
        distance(landmarks[TIPS.index], landmarks[TIPS.middle]) < 20
      );

    case "S":
      return (
        isFingerClosed(landmarks, "index") &&
        isFingerClosed(landmarks, "middle") &&
        isFingerClosed(landmarks, "ring") &&
        isFingerClosed(landmarks, "pinky")
      );

    case "T":
      return distance(landmarks[TIPS.thumb], landmarks[TIPS.middle]) < 30;

    case "U":
      return (
        isFingerOpen(landmarks, "index") &&
        isFingerOpen(landmarks, "middle") &&
        distance(landmarks[TIPS.index], landmarks[TIPS.middle]) < 30
      );

    case "V":
      return (
        isFingerOpen(landmarks, "index") &&
        isFingerOpen(landmarks, "middle") &&
        distance(landmarks[TIPS.index], landmarks[TIPS.middle]) > 40
      );

    case "W":
      return (
        isFingerOpen(landmarks, "index") &&
        isFingerOpen(landmarks, "middle") &&
        isFingerOpen(landmarks, "ring")
      );

    case "X":
      return landmarks[TIPS.index][1] > landmarks[6][1];

    case "Y":
      return (
        isFingerOpen(landmarks, "thumb") && isFingerOpen(landmarks, "pinky")
      );

    case "Z":
      return isFingerOpen(landmarks, "index");

    default:
      return false;
  }
};
