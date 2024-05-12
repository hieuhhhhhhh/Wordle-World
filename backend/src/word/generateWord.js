import words from "./wordList";

const generateWord = () => {
  if (!words || !Array.isArray(words) || words.length === 0) {
    throw new Error("Invalid word list");
  }

  // randomize an index:
  const index = Math.floor(Math.random() * words.length);

  return words[index];
};

export default generateWord;
