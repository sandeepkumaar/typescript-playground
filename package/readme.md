## Typescript packaging

Two types to emit d.ts files
- colocated d.ts files
- seperate types folder

When publishing types as seperate folder, we can only refer only one file from 'types' field. we cant provide type 
support for imports other than index.   

colocated d.ts files is best, it takes care of providing type for all imports. But one caveat is tsc throws overwrite 
error when we emit the d.ts files again. so we use this script to delete them before emitting.

```
"lint": "rimraf -g ./index.d.ts ./src/**/*.d.ts && tsc --declaration --emitDeclarationOnly",
```

Ref: https://www.codejam.info/2021/10/typescript-cannot-write-file-overwrite-input.html

### What if you want to import complex type from a d.ts file
Have those files under `/types` folder or under types.d.ts in the root and exclude it from deleting by rimraf  
Best trick is to place all source files under src/ and custom types outside so we can delete all d.ts inside src





