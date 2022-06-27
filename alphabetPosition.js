// In this kata you are required to, given a string,
// replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.



function alphabetPosition(text) {
  const result = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1;

  const splitText = text
    .split("")
    .filter((a) => alphabet.split("").includes(a.toLowerCase()));

  for (const letter of splitText) {
    result.push(alphaVal(letter));
  }
  return result.join(" ");
}
