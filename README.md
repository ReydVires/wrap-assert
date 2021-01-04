# wrap-assert

An assert wrapper for mini test.

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
