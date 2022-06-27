// Write a function toWeirdCase that accepts a string,
// and returns the same string with all even indexed
// characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just
// explained is zero based, so the zero-ith index is even,
// therefore that character should be upper cased and you
// need to start over for each word.

function toWeirdCase(string) {
  const result = [];
  const splitStr = string.split(" ");

  for (const word of splitStr) {
    result.push(" ");

    for (let i = 0; i < word.length; i++) {
      if (i % 2) {
        result.push(word[i].toLowerCase());
      } else {
        result.push(word[i].toUpperCase());
      }
    }
  }

  return result.join("").slice(1, result.length);
}
