// Завдання 2. Композиція масивів

/**
 * Creates a new array by merging two arrays and
 * truncates it to a maximum length if needed.
 *
 * @param {any[]} firstArray - First array to merge.
 * @param {any[]} secondArray - Second array to merge.
 * @param {number} maxLength - Maximum length of the resulting array.
 * @returns {any[]} Merged array limited by maxLength.
 * @example
 * makeArray(["Mango"], ["Ajax", "Poly"], 2);
 * // ["Mango", "Ajax"]
 */
const makeArray = function (firstArray, secondArray, maxLength) {
  const newArray = [...firstArray, ...secondArray];

  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  return newArray;
};

console.log(`\n----- Array Composition -----`);
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
