# wrap-assert

An assert wrapper for mini test.

<img src='https://img.shields.io/badge/Version-0.1.2-brightgreen'  alt="Version: 0.1.2"/>

## usage (commonJS)

```javascript
const assert = require("wrap-assert");

const label = "Equation";
const test = 10 > 8;
assert(test === true, label); // Output: Equation test is pass ✅
assert(!test, label); // Output: Equation test is fail ❌
```

## method

`assert(value [, label] [, failMessage])`

- value: boolean
- label?: string
- failMessage?: string

NPM Package: [Link](https://npmjs.com/package/wrap-assert)
