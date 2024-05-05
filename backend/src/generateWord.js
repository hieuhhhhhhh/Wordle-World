import { readFile } from "fs/promises";

async function readJSONFile(filename) {
  try {
    const data = await readFile(filename, "utf8"); // Reading the file
    const jsonData = JSON.parse(data); // Parsing the JSON data
    return jsonData;
  } catch (error) {
    throw error;
  }
}

const words = await readJSONFile("src/wordList.json");

const generateWord = () => {
  if (!words || !Array.isArray(words) || words.length === 0) {
    throw new Error("Invalid word list");
  }

  // randomize an index:
  const index = Math.floor(Math.random() * words.length);

  return words[index];
};

export default generateWord;
