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




/**
 * Play a kids' word chain game.
 * @param {*} : A list of names
 * @returns the list of output chain words
 */

function kidsGame(names) {
  
  let output = [names.shift()];  
  let firstLetterToWords = {};

  for (let name of names) {

    if (firstLetterToWords.hasOwnProperty(name.charAt(0))) {
      firstLetterToWords[name.charAt(0)].push(name);      
    } else {
      firstLetterToWords[name.charAt(0)] = [name];
    }
  }

  while (true) {
    
    let startLetter = output[output.length -1].slice(-1);

    if (!firstLetterToWords.hasOwnProperty(startLetter) || firstLetterToWords[startLetter].length === 0) { 
      break;
    }

    let word = firstLetterToWords[startLetter].shift();    
    output.push(word);
  }

  return output;
}


console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]));