export default addCurry;
export type Add = import('./utils.js').Add;
/**
 * @type {(fn: Add) => (a: number, b: number, arr?: number[]) => number}
*/
declare const addCurry: (fn: Add) => (a: number, b: number, arr?: number[]) => number;
