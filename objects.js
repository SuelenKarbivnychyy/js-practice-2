'use strict';

/**
 * Return a dictionary of each word and the no. of times they appear.

    You can assume that `phrase` does not contain any punctuation and that
    each word is separated with a space.

 * @param {*} phrase (str): A string of space-separated words
 * @returns dict: {word: number of times word appears in `phrase`}
 */

function countWords(phrase) {

  let wordCounts = {};

  for (const word of phrase.split(' ')) {
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  
  return wordCounts;
  
}

// console.log(countWords('The quick brown fox jumps over the lazy dog ick brown fox jumps'));




/**
 * Return the list of melons that cost `price`.
 * @param {*} price : A number
 * @returns list: List of melons that cost `price`
            None: If there are no melons that cost `price`
 */
function getMelonsAtPrice(price) {

  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (melon_prices.hasOwnProperty(price)) {
    return melon_prices[price].sort();
  } else {
    return 'none';
  }
}

// console.log(getMelonsAtPrice(3.25))
