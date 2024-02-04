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
  
  let output = [names[0]];  
  let lastItemFromResult = output[output.length -1];
  

  let firstLetterToWords = {};

  for (let name of names) {

    if (firstLetterToWords.hasOwnProperty(name.charAt(0))) {
      firstLetterToWords[name.charAt(0)].push(name);
    } else {
      firstLetterToWords[name.charAt(0)] = [name];
    }
  }

  // while (true) {
  let startLetter = lastItemFromResult.slice(-1);
  console.log(startLetter);

  if (! firstLetterToWords.hasOwnProperty(startLetter)) {
    // break;
    console.log(false)
  }

  let word = firstLetterToWords[startLetter].pop();
  console.log(word);
    // output.push(word);
  }

  // return output;
  // console.log(startWith);

  // for (let name of names) {
  //   // currentWord = name.charAt(0);
  //   if (name.charAt(0) === startWith) {
  //     result.push(name);
  //   }
  // }

  // console.log(result);


// }

kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"])