/**
 * Function to add two numbers
 * @param {number} a - argx - retained
 * @param {number} b - argy - retained
 * @returns {number} 
*/
export function add1(a, b) {
  return a + b;
};

/**
 * Function to add number - ignored
 * @param {number} a - arg1 -- ignored
 * @param {number} b - arg2 -- ignored
 * @type {(a: number, b: number) => number} 
 */
export function add2(a, b) {
  return a + b;
};


/**
 * @typedef {(a: number, b: number) => number} Add
 * @param {number} a - arg1 -- ignored
 * @param {number} b - arg2 -- ignored
*/

/**
 * @type {Add}
*/
export function add3(a, b) {
  return a + b;
};

