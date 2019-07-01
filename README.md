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
It is **[lightweight](https://bundlephobia.com/result?p=cnbuilder)**, **[fast](#performance-recent-benchmarks-results)** and has **no dependencies**!  
Designed to be fastest full-feature drop-in replacement for `classnames` package.

Install it via [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)

```bash
npm i cnbuilder
# OR
yarn add cnbuilder
```

**INSTALLATION NOTE:**  
This lib is written in ES6+ and delivering with both, transpiled and untranspiled versions:

- `main` field of `package.json` is pointing to transpiled ES3-compatible version with CJS modules resolution;
- `module` field is pointing to transpiled ES3-compatible version with ES modules resolution;
- `esnext` field is pointing to the ES6+ version with ES modules resolution;

Depending on your targets you may have to use [Webpack](https://webpack.js.org/) and/or
[Babel](http://babeljs.io/) to pull untranspiled version of package.  
See some tips on wiring thing up: [https://2ality.com/2017/06/pkg-esnext.html](https://2ality.com/2017/06/pkg-esnext.html)

Use it wherever and however you want - node.js or webpack, CJS or ESM modules!

```javascript
var cnb = require("cnbuilder");

cnb("cnbuilder", { is: true }, ["awesome!"]); // => 'cnbuilder is awesome!'
```

```typescript
import cnb from "cnbuilder";

cnb("works", { with: true }, ["ESM!"]); // => 'works with ESM!'
```

### Why

`cnbuilder` is designed to be as lightweight and fast as possible, without loosing the functionality ([jorgebucaran/classcat](https://github.com/jorgebucaran/classcat) is faster in some cases but less handy because does not allow to pass variable count of arguments).
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

```javascript
let buttonType = "primary";
cnb({ [`btn-${buttonType}`]: true });
```

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
classcat    × 7,817,007 ops/sec;
classnames  × 3,039,813 ops/sec;
clsx        × 8,455,870 ops/sec;
<string><em>cnbuilder   × 9,001,686 ops/sec;</em></string>

# OBJECTS
classcat    × 6,783,071 ops/sec;
classnames  × 2,623,124 ops/sec;
clsx        × 5,247,541 ops/sec;
<string><em>cnbuilder   × 7,197,917 ops/sec;</em></string>

# ARRAYS
<string><em>classcat    × 6,189,615 ops/sec;</em></string>
classnames  × 1,222,725 ops/sec;
clsx        × 5,512,391 ops/sec;
cnbuilder   × 5,839,618 ops/sec;

# NESTED ARRAYS
classcat    × 1,433,007 ops/sec;
classnames  × 821,668 ops/sec;
<string><em>clsx        × 4,064,528 ops/sec;</em></string>
cnbuilder   × 3,653,864 ops/sec;

# OBJECTS NESTED IN ARRAYS
<string><em>classcat    × 4,745,927 ops/sec;</em></string>
classnames  × 1,124,121 ops/sec;
clsx        × 3,393,440 ops/sec;
cnbuilder   × 3,894,376 ops/sec;

# MIXED
<string><em>classcat    × 5,226,767 ops/sec;</em></string>
classnames  × 1,569,844 ops/sec;
clsx        × 3,857,523 ops/sec;
cnbuilder   × 4,430,334 ops/sec;

# MIXED WITH WRONG DATA
classcat    × 682,359 ops/sec;
classnames  × 737,083 ops/sec;
<string><em>clsx        × 1,107,078 ops/sec;</em></string>
cnbuilder   × 1,087,857 ops/sec;
</pre>
