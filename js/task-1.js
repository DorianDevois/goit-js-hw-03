// Завдання 1. Генератор slug

/**
 * Generates a URL-friendly slug from a title string.
 *
 * - Trims whitespace
 * - Converts to lowercase
 * - Replaces spaces with hyphens
 *
 * @param {string} title - The input title to convert
 *
 * @returns {string} A lowercase hyphen-separated slug
 *
 * @throws {TypeError} If title is not a string.
 *
 * @example
 * slugify("Hello World");
 * // "hello-world"
 */
const slugify = function (title) {
  if (typeof title !== 'string') {
    throw new TypeError('Title must be a string');
  }

  return title.trim().toLowerCase().split(' ').join('-');
};

console.log(`----- Slug Generator -----`);
console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
