'use strict';

/**
 * Return a list of unique words that appear in `words1` and `words2`.
 * @param {*} words1 (list): A list of words
 * @param {*} words2 (list): Another list of words
 * @returns list: A list of unique words
 */
function wordsInCommon(words1, words2) {
  
  const set1 = new Set(words1);
  const set2 = new Set(words2);

  let result = new Set();

  for (const word of set1) {
    if (set2.has(word)) {
      result.add(word);
    }
  }

  return Array.from(result);

}

// console.log(wordsInCommon(['completed', 'with', '1', 'local', 'object'], ['completed', 'with', '1', 'local', 'object', "amor", 'paz']))





function kidsGame(names) {
  

}
