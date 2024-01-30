'use strict';

// 1. printIndices
function printIndices(items) {

  for (const item in items) {
    console.log(items[item], item);
  }  
  
}
// printIndices(["apple", "berry", "cherry"])



// 2. everyOtherItem
function everyOtherItem(items) {
  
  let result = [];

  for (const item in items) {
    if (item %2 === 0) {
      result.push(items[item])
    }
  }

  console.log(result)
}

// console.log(everyOtherItem(["apple", 2, "love", "monkey", 85, 42, 79]))


// 3. smallestNItems
function smallestNItems(items, n) {
  // console.log(`list items ${items}`);

  // let result = [];  
}


