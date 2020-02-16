<div align="center">
  <h1>cnbuilder</h1>
  <p>Yet another classname string builder (the fastest one)</p>
  <p>
    <a href="https://www.npmjs.com/package/cnbuilder">
        <img src="https://flat.badgen.net/travis/xobotyi/scrollbar-width" alt="Build status"/>
    </a>
    <a href="https://www.npmjs.com/package/cnbuilder">
        <img src="https://flat.badgen.net/npm/v/cnbuilder" alt="NPM version"/>
    </a>
    <a href="https://www.npmjs.com/package/cnbuilder">
        <img src="https://flat.badgen.net/npm/dw/cnbuilder" alt="NPM weekly downloads"/>
    </a>
    <a href="https://www.npmjs.com/package/cnbuilder">
        <img src="https://flat.badgen.net/npm/license/cnbuilder" alt="License"/>
    </a>
    <a href="https://www.npmjs.com/package/cnbuilder">
        <img src="https://flat.badgen.net/npm/types/cnbuilder" alt="Types definition"/>
    </a>
    <a href="https://www.npmjs.com/package/cnbuilder">
        <img src="https://flat.badgen.net/codacy/grade/71cdf9626f264970a23706c93b83a4bb" alt="Codacy Code Grade"/>
    </a>
    <a href="https://www.npmjs.com/package/cnbuilder">
        <img src="https://flat.badgen.net/codacy/coverage/71cdf9626f264970a23706c93b83a4bb" alt="Tests LOC"/>
    </a>
  </p>
</div>

One more DOM classname string builder if you not enough yet 😁  
It is **[lightweight](https://bundlephobia.com/result?p=cnbuilder)**, **[fast](#performance-recent-benchmarks-results)** and has no dependencies!  
Designed to be fastest full-feature drop-in replacement for `classnames` package.

Install it via [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)

```bash
npm i cnbuilder
# OR
yarn add cnbuilder
```

Use it wherever and however you want - node.js or webpack, CJS or ESM modules!

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
It is written with power of [TypeScript](http://www.typescriptlang.org) and it's API is fully compatible with [JedWatson/classnames](https://github.com/JedWatson/classnames), so it wont be anyhow hard to migrate if you're already using `classnames` package.

### Usage

As already said - API is the same with `classnames` pkg, and due to my laziness - i'll just copy-past their usage documentation (with small additions)😅😱

The `cnb` function takes any number of arguments which can be a string, array or object. Any other input will be ignored.
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
  classnames("test", [], { a: false }); // => "test " (5 chars with space at the end)
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

### Performance (recent benchmarks results)

benchmarks ran on 3.4GHz Core i7 CPU width 16GB DDR4 RAM

```bash
yarn && yarn build && cd ./benchmark && yarn && yarn start
```

<pre>
# strings
<string><em>cnbuilder x 9,269,882 ops/sec ±0.40% (96 runs sampled)</em></string>
classcat x 8,420,286 ops/sec ±1.17% (95 runs sampled)
classnames x 2,981,605 ops/sec ±0.39% (93 runs sampled)
clsx x 7,922,417 ops/sec ±0.25% (93 runs sampled)

# objects
cnbuilder x 7,270,064 ops/sec ±0.65% (95 runs sampled)
<string><em>classcat x 7,484,998 ops/sec ±0.70% (95 runs sampled)</em></string>
classnames x 2,731,604 ops/sec ±0.45% (95 runs sampled)
clsx x 5,370,626 ops/sec ±0.44% (96 runs sampled)

# arrays
<string><em>cnbuilder x 7,092,002 ops/sec ±0.42% (94 runs sampled)</em></string>
classcat x 6,818,053 ops/sec ±0.29% (92 runs sampled)
classnames x 1,676,201 ops/sec ±0.27% (96 runs sampled)
clsx x 6,083,849 ops/sec ±0.22% (94 runs sampled)

# nested arrays
<string><em>cnbuilder x 5,828,441 ops/sec ±0.39% (96 runs sampled)</em></string>
classcat x 5,609,506 ops/sec ±0.25% (96 runs sampled)
classnames x 1,076,019 ops/sec ±0.45% (91 runs sampled)
clsx x 4,910,528 ops/sec ±0.19% (96 runs sampled)

# objects nested in arrays
cnbuilder x 5,652,700 ops/sec ±0.83% (95 runs sampled)
<string><em>classcat x 5,756,021 ops/sec ±0.73% (96 runs sampled)</em></string>
classnames x 1,599,139 ops/sec ±0.27% (95 runs sampled)
clsx x 4,677,370 ops/sec ±0.57% (95 runs sampled)

# mixed
cnbuilder x 6,000,100 ops/sec ±0.74% (94 runs sampled)
<string><em>classcat x 6,028,224 ops/sec ±0.31% (94 runs sampled)</em></string>
classnames x 1,971,724 ops/sec ±0.30% (93 runs sampled)
clsx x 4,922,858 ops/sec ±0.35% (94 runs sampled)

# mixed with wrong data
<string><em>cnbuilder x 1,915,258 ops/sec ±0.71% (95 runs sampled)</em></string>
classcat x 1,550,198 ops/sec ±0.38% (94 runs sampled)
classnames x 1,032,770 ops/sec ±0.50% (91 runs sampled)
clsx x 1,732,645 ops/sec ±0.75% (92 runs sampled)
</pre>
