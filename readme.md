## Typescript as JSDOC

2 ways to add type comments which can be inferred by tsc
- pure jsdoc style
- ts style jsdocs


## pure jsdoc
- verbose
- serves both as documentation and also for type checks


## ts style jsdoc
- concise; easily express *type* documentation
- other documentation is not supported. but we can add them in code for our understanding. not sure if editors can pick them up

```
/**
 * Function to add number - ignored
 * @param {number} a - arg1 -- ignored
 * @param {number} b - arg2 -- ignored
 * @type {(a: number, b: number) => number} 
 */
```

## Summary - Tips
- Prefer ts style jsdoc
- use only @typedef and @type with {import().X} X for reusing types
- use custom d.ts files for complex types like extending Error etc. make sure to distinguish it from the generated d.ts files.
  - refer the Error example in the package folder
- no need for creating manual d.ts files for complex types.  use verbose @typedef. its fine. 
  - else create a common file like types.d.ts - write typescript types. import them via @typedef in code. 
- for packages : emit d.ts files alongside. rest is taken care. we need to remove the older d.ts to avoid the override error
- for normal - no need to emit files

## Cheatsheet
- Add types only to functions and objects where its declared. rest all can be imported and inferred
- use only `@type` and `@typedef`. @type for specifying the type. @typedef for declaring the type and using it elsewhere through
@type
- functions
```
/** @type {(a: number, b: string, arr: string[]) => boolean} */

// Generics
/** @type {<T>(a: number, b: string, arr: string[T]) => boolean} */

// Closure
/** @type {(a: number) => (b: number) => number} */
```


