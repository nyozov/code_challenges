//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  const positiveArr = [];
  for (const num of arr) {
    if (num > 0) {
      positiveArr.push(num);
    }
  }

  if (positiveArr.length > 0) {
    return positiveArr.reduce((a, b) => a + b);
  }

  return 0;
}
