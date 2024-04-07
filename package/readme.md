## Typescript packaging

Two types to emit d.ts files
- colocated d.ts files
- seperate types folder

When publishing types as seperate folder, we can only refer only one file from 'types' field. we cant provide type 
support for imports other than index.   

colocated d.ts files is best, it takes care of providing type for all imports. But one caveat is tsc throws overwrite 
error when we emit the d.ts files again. so we use this script to delete them before emitting.

```
"lint": "rimraf -g ./*.d.ts ./src/**/*.d.ts && tsc --declaration --emitDeclarationOnly",
```

Ref: https://www.codejam.info/2021/10/typescript-cannot-write-file-overwrite-input.html



