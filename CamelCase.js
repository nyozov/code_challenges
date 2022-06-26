// Write simple .camelCase method for strings. All words must have their first letter capitalized without spaces.

String.prototype.camelCase = function () {
  //your code here

  const result = [];
  const splitStr = this.split(" ");

  for (const word of splitStr) {
    result.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return result.join("");
};
