import * as handpose from "@tensorflow-models/handpose";
import "@tensorflow/tfjs";

let model = null;

export const loadHandposeModel = async () => {
  model = await handpose.load();
  console.log("Handpose model loaded");
};

export const detectHand = async (video) => {
  if (
    model &&
    video.readyState === 4
  ) {
    const predictions = await model.estimateHands(video);
    return predictions;
  }
  return [];
};
