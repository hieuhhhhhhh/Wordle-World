const compareWords = (word, guess) => {
  // 1: generate every letter status.
  let letterStatus = [];
  let correctLs = 0; // correctLs = correct letters

  for (let i = 0; i < word.length; i++) {
    let status;
    if (word[i] === guess[i]) {
      status = 1;
      correctLs++;
    } else if (word.includes(guess[i])) {
      status = 0;
    } else {
      status = -1;
    }
    letterStatus.push(status);
  }

  // 3: generate result.
  const result = {
    gameWon: correctLs === word.length,
    letterStatus: letterStatus,
  };

  return result;
};

export default compareWords;
