import {add1, add2} from './utils.js';
/**
 * @typedef {import('./utils.js').Add} Add
*/



{
//add1('a', 'b');

add1(1, 1);
}

{
//add2('a', 'b');

add2(1, 1);
}

//{
////add3('a', 'b');
//
//add3(1, 1);
//}


/**
 * @type {(fn: Add) => (a: number, b: number, arr?: number[]) => number} 
*/
const addCurry = (fn) => (a, b, arr) => {
  return fn(a,b);
};

export default addCurry
