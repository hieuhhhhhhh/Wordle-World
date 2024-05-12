import words from "./wordList.js";

const validateWord = (word) => {
  return words.includes(word);
};

export default validateWord;
