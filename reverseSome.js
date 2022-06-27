// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words
// reversed (Just like the name of this Kata). Strings passed in will
// consist of only letters and spaces. Spaces will be included only when
// more than one word is present.

function spinWords(string) {
  const result = [];

  const splitStr = string.split(" ");

  for (const word of splitStr) {
    if (word.length >= 5) {
      result.push(word.split("").reverse().join(""));
    } else {
      result.push(word);
    }
  }

  return result.join(" ");
}
