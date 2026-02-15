// Завдання 3. Фільтрація масиву чисел

/**
 *
 * Filters numbers greater than a given value.
 *
 * Iterates through the input array and returns a new array
 * containing only numbers that are greater than the specified value.
 *
 * @param {number[]} numbers - Array of numbers to filter.
 * @param {number} value - Threshold value to compare against.
 * @returns {number[]} A new array with numbers greater than value.
 *
 * @example
 * filterArray([1, 2, 3, 4, 5], 3);
 * // [4, 5]
 *
 */
const filterArray = function (numbers, value) {
  const array = [];

  for (const number of numbers) {
    if (number > value) {
      array.push(number);
    }
  }

  return array;
};

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
