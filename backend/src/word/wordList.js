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

const words = await readJSONFile("src/word/wordList.json");

export default words;
