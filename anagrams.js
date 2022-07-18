// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs a word and an array with words. You should
// return an array of all the anagrams or an empty array if there are none.

function anagrams(word, words) {
  const result = [];

  for (const unit of words) {
    if (unit.split("").sort().join("") === word.split("").sort().join("")) {
      result.push(unit);
    }
  }

  return result;
}
