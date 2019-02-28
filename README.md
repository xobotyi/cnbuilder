<div align="center">
  <h1>cnbuilder</h1>
  <p>
      <a href="https://www.npmjs.com/package/cnbuilder"><img src="https://img.shields.io/badge/npm-cnbuilder-brightgreen.svg" /></a>
      <a href="https://www.npmjs.com/package/cnbuilder"><img src="https://img.shields.io/npm/v/cnbuilder.svg" /></a>
      <a href="https://www.npmjs.com/package/cnbuilder"><img src="https://img.shields.io/npm/dt/cnbuilder.svg" /></a>
      <a href="https://www.npmjs.com/package/cnbuilder"><img src="https://img.shields.io/travis/xobotyi/cnbuilder.svg" /></a>
      <a href="https://www.codacy.com/app/xobotyi/cnbuilder"><img src="https://api.codacy.com/project/badge/Grade/71cdf9626f264970a23706c93b83a4bb"/></a>
      <a href="https://www.codacy.com/app/xobotyi/cnbuilder"><img src="https://api.codacy.com/project/badge/Coverage/71cdf9626f264970a23706c93b83a4bb"/></a>
      <a href="https://www.npmjs.com/package/cnbuilder"><img src="https://img.shields.io/npm/l/cnbuilder.svg" /></a>
  </p>
</div>

One more DOM classname string builder if you not enough yet 😁  
It is **[small](https://bundlephobia.com/result?p=cnbuilder)**, **[fast](#performance-recent-benchmarks-results)** and has **no dependencies**!

Install it via [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)

```bash
npm i cnbuilder
# OR
yarn add cnbuilder
```

Use it wherever and however you want - node.js or webpack, CJS or ESM modules!

```javascript
var cnb = require("cnbuilder");

cnb("cnbuilder", { is: true }, ["awesome!"]); // => 'cnbuilder is awesome!'
```

```typescript
import cnb from "cnbuilder";

cnb("works", { with: true }, ["ESM!"]); // => 'works with ESM!'
```

Or even just include it with a standalone `<script>` tag from [CDNJS](https://cdnjs.com/libraries/cnbuilder)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/cnbuilder/1.0.0/cnbuilder.js" />
```

### Why

cnbuilder is designed to be as small and fast as possible, without loosing the functionality ([jorgebucaran/classcat](https://github.com/jorgebucaran/classcat) is faster but less functional due to not allow to pass variable count of arguments).  
It is written with power of [TypeScript](http://www.typescriptlang.org) and it's API is fully compatible with [JedWatson/classnames](https://github.com/JedWatson/classnames), so it wont be anyhow hard to migrate for you if you're already using `classnames` package.

### Usage

As already said - API is the same with `classnames` pkg, and due to my laziness - i'll just copy-past their usage documentation (width small additions)😅😱

The `classNames` function takes any number of arguments which can be a string, array or object.
The argument `'foo'` is short for `{ foo: true }` or `['foo']`. If the value associated with a given key is falsy, that key won't be included in the output.

```js
cnb("foo", "bar"); // => 'foo bar'
cnb("foo", { bar: true }); // => 'foo bar'
cnb({ "foo-bar": true }); // => 'foo-bar'
cnb({ "foo-bar": false }); // => ''
cnb({ foo: true }, { bar: true }); // => 'foo bar'
cnb({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
cnb("foo", { bar: true, duck: false }, "baz", { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
cnb(null, false, "bar", undefined, 0, 1, { baz: null }, ""); // => 'bar 1'
```

Arrays will be recursively flattened as per the rules above:

```js
var arr = ["b", { c: true, d: false }];
cnb("a", arr); // => 'a b c'
```

**BUT!** there are two additions, comparing to `classnames` result generation:

- it does not generate useless spaces:
  ```javascript
  classnames("test", [], { a: false }); // => "test " (4 chars with space at the end)
  cnb("test", [], { a: false }); // => "test" (just 4 chars)
  ```
- it skips fully numeric classnames, due to classnames starting with digit are illegal, but it **can't** skip strings starting with digit, cause it would impact the performance, so that part is left for the end developer
  ```javascript
  classnames(321, "1stPlace"); // => "321 1stPlace"
  cnb(321, "1stPlace"); // => "1stPlace"
  ```

#### Dynamic class names with ES2015

If you're in an environment that supports [computed keys](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer) (available in ES2015 and Babel) you can use dynamic class names:

### Polyfills needed to support older browsers

`Array.isArray`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) for details about unsupported older browsers (e.g. <= IE8) and a simple polyfill.
`Array.reduce`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) for details about unsupported older browsers (e.g. <= IE10) and a simple polyfill.

### Performance (recent benchmarks results)

benchmarks ran on 3.4GHz Core i7 CPU width 16GB DDR4 RAM

```bash
npm run build && npm i -C benchmark && npm -C benchmark start
```

<pre>
# STRINGS
<em>cnbuilder   × 8,836,828 ops/sec;</em>
classcat    × 8,400,103 ops/sec;
classnames  × 2,965,358 ops/sec;
clsx        × 8,655,090 ops/sec;

# OBJECTS
cnbuilder   × 5,882,489 ops/sec;
<em>classcat    × 6,524,113 ops/sec;</em>
classnames  × 2,542,451 ops/sec;
clsx        × 5,025,306 ops/sec;

# ARRAYS
cnbuilder   × 4,800,036 ops/sec;
<em>classcat    × 5,858,583 ops/sec;</em>
classnames  × 1,173,988 ops/sec;
clsx        × 1,179,686 ops/sec;

# NESTED ARRAYS
<em>cnbuilder   × 3,090,131 ops/sec;</em>
classcat    × 1,427,428 ops/sec;
classnames  ×   822,602 ops/sec;
clsx        ×   674,716 ops/sec;

# OBJECTS NESTED IN ARRAYS
cnbuilder   × 3,361,427 ops/sec;
<em>classcat    × 4,805,079 ops/sec;</em>
classnames  × 1,099,372 ops/sec;
clsx        × 1,003,921 ops/sec;

# MIXED
cnbuilder   × 3,636,334 ops/sec;
<em>classcat    × 5,284,783 ops/sec;</em>
classnames  × 1,533,224 ops/sec;
clsx        × 1,639,769 ops/sec;
</pre>
