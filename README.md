<div align="center">
  <h1>cnbuilder</h1>
  <p>Yet another classname string builder (the fastest one)</p>
  <p>
    <a href="https://travis-ci.org/xobotyi/cnbuilder">
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
    <a href="https://www.codacy.com/manual/xobotyi/cnbuilder">
        <img src="https://flat.badgen.net/codacy/grade/71cdf9626f264970a23706c93b83a4bb" alt="Codacy Code Grade"/>
    </a>
    <a href="https://www.codacy.com/manual/xobotyi/cnbuilder">
        <img src="https://flat.badgen.net/codacy/coverage/71cdf9626f264970a23706c93b83a4bb" alt="Tests LOC"/>
    </a>
  </p>
</div>

---

<div align="center">❤️Please consider starring this project to show your love and support.🙌</div>

---

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

- `main` field of `package.json` is pointing to transpiled ES5 version with CJS modules resolution;
- `module` field is pointing to transpiled ES5 version with ES modules resolution;
- `esnext` field is pointing to the ES6+ version with ES modules resolution;

Depending on your targets you may have to use [Webpack](https://webpack.js.org/) and/or
[Babel](http://babeljs.io/) to pull untranspiled version of package.  
See some tips on wiring thing up: [https://2ality.com/2017/06/pkg-esnext.html](https://2ality.com/2017/06/pkg-esnext.html)

Use it wherever and however you want - node.js or webpack, CJS or ESM modules!

```javascript
var cnb = require("cnbuilder").cnb;

cnb("cnbuilder", { is: true }, ["awesome!"]); // => 'cnbuilder is awesome!'
```

```typescript
import { cnb } from "cnbuilder";

cnb("works", { with: true }, ["ESM!"]); // => 'works with ESM!'
```

### Why

`cnbuilder` is designed to be lighnweight and fast drop-in replacement of [classnames](https://npmjs.com/classnames) package, so it wont be anyhow hard to migrate if you're already using `classnames` package.
In general `cnbuilder` is **3-4 times faster** than `classnames` and slightly lighter.

### Usage

API is absolutely the same with `classnames`, except the moment that `cnbuilder`'s methods are named exported.

```typescript
import { cnb, dcnb } from 'cnbuilder';

cnb(); // common version
dcnb(); // deduped version
```
The `cnbuilder` takes any number of arguments which can be a string, array or object. Any other input will be ignored.
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

Output, as you see - pretty much the same too, but has some differences in direction of class names RFC.

- `cnbuilder` does not generate useless spaces:
  ```javascript
  classnames("test", [], { a: false }); // => "test " (5 chars with space at the end)
  cnb("test", [], { a: false }); // => "test" (just 4 chars)
  ```
- `cnbuilder` skips numbers as they'te not the part of class names RFC. But it **can't** skip strings starting with digit and numeric object keys, cause it would impact the performance, so that part is left for the end developer
  ```javascript
  classnames(321, "1stPlace"); // => "321 1stPlace"
  cnb(321, "1stPlace"); // => "1stPlace"
  ```

#### Dynamic class names with ES2015

If you're in an environment that supports [computed keys](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer) (available in ES2015+ and Babel) you can use dynamic class names:

```javascript
let buttonType = "primary";
cnb({ [`btn-${buttonType}`]: true });
```

#### Dedupe version

`cnbuilder` exports an alternative version which dedupes classes and ensures falsy classes specified in later arguments are excluded from the result string.

This version is way slower so use it with caution.

To use is simply import the `dcnb` method from `cnbuilder` package:

```typescript
import { dcnb } from 'cnbuilder';

dcnb('foo foo foo', 'foo', 'foo foo');  // => 'foo'
dcnb('foo', {foo: false, bar: true}, 'bar bar'); // => 'bar'
```

### Polyfills needed to support older browsers

- `Array.isArray`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) for details about unsupported older browsers (e.g. <= IE8) and a simple polyfill.
- `Object.create`: used in dedupe version, see [MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create)  for details about unsupported older browsers (e.g. <= IE8) and a simple polyfill.

### Performance (recent benchmarks results)

Benchmarks results can be found in the [`benchmark`](/benchmark) directory.

## Related projects

- [react-scrollbars-custom](https://www.npmjs.com/package/react-scrollbars-custom) &mdash; The best React custom scrollbars component. Allows you to customise scrollbars as you like it, crossbrowser!
- [zoom-level](https://www.npmjs.com/package/zoom-level) &mdash; A comprehensive cross-browser package that allow you to determine page's and element's zoom level.
- [@xobotyi/scrollbar-width](https://www.npmjs.com/package/@xobotyi/scrollbar-width) &mdash; A tool to get browser's scrollbars width.
- [@xobotyi/should-reverse-rtl-scroll](https://www.npmjs.com/package/@xobotyi/should-reverse-rtl-scroll) &mdash; A tool detecting if RTL scroll value should be negative.
