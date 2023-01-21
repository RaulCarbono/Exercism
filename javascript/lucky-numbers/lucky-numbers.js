// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let a = array1.join("");
  let b = array2.join("");
  return parseInt(a) + parseInt(b);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let valueS = String(value)
  let valueReverse = String(value).split('').reverse()
  let StringValueReverse = String(valueReverse).replace(/,/g, "")
 
 return valueS === StringValueReverse ? true : false 
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
 
  return (Boolean(input)? "Must be a number besides 0" : "Required field")
     
}
