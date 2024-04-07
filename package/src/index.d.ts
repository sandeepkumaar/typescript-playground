export default addCurry;
export type Add = import('./utils.js').Add;
export type CustomError = import('../types.d.ts').CustomError;
/**
 * @type {(fn: Add) => (a: number, b: number, arr?: number[]) => number}
*/
declare const addCurry: (fn: Add) => (a: number, b: number, arr?: number[]) => number;
