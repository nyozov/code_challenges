// In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50
// new inhabitants per year come to live in the town. How many years does
// the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  // your code

  let counter = 1;

  let currentPop = p0;

  while (currentPop + currentPop * (percent / 100) + aug < p) {
    counter++;
    currentPop = Math.floor(currentPop + currentPop * (percent / 100) + aug);
    console.log(currentPop);
  }

  return counter;
}
