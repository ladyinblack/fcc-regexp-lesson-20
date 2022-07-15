// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match All Numbers</h1>`;

/** TODO:
 * Use the shorthand character class \d to count how many digits are in movie titles.  Written out numbers ("six" instead of 6) do not count.
 
 let movieName = "2001: A Space Odyssey";
 let numRegex = /change/;      // Change this line
 let result = movieName.match(numRegex).length;
 */

function DigitsCount(movieName) {
  let numRegex = /\d/g;
  let result = movieName.match(numRegex);
  if (result !== null) {
    return result.length;
  } else {
    return result;
  }
}

console.log(DigitsCount('9'));
console.log(DigitsCount('Catch 22'));
console.log(DigitsCount('101 Dalmatians'));
console.log(DigitsCount('One, Two, Three'));
console.log(DigitsCount('21 Jump Street'));
console.log(DigitsCount('2001: A Space Odyssey'));
