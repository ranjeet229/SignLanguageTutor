import { getFingerStates } from "./fingerState";

export const detectSign = (landmarks) => {
  if (!landmarks) return null;

  const fingers = getFingerStates(landmarks);

  if (
    fingers.thumb &&
    !fingers.index &&
    !fingers.middle &&
    !fingers.ring &&
    !fingers.pinky
  ) return "A";

  if (
    !fingers.thumb &&
    fingers.index &&
    fingers.middle &&
    fingers.ring &&
    fingers.pinky
  ) return "B";

  if (
    fingers.thumb &&
    fingers.index &&
    fingers.middle &&
    fingers.ring &&
     fingers.pinky &&
    indexDist < 140 &&
    middleDist < 150
  ) return "C";

  if (
    !fingers.thumb &&
    fingers.index &&
    !fingers.middle &&
    !fingers.ring &&
    !fingers.pinky
  ) return "D";

  return null;
};

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const getRandomLetter = () => {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
};
