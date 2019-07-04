import { Suite } from "benchmark";
import classcat from "classcat";
import classnames from "classnames";
import clsx from "clsx";
const cnb = require("../../dist/cnbuilder");

console.log(`\n# STRINGS`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: "${fn()}")`)
  )
  .add("cnbuilder  ", () => cnb("foo", "", "bar", "baz", "bax", "bux"))
  .add("classcat   ", () => classcat(["foo", "", "bar", "baz", "bax", "bux"]))
  .add("classnames ", () => classnames("foo", "", "bar", "baz", "bax", "bux"))
  .add("clsx       ", () => clsx("foo", "", "bar", "baz", "bax", "bux"))
  .run();

console.log(`\n# OBJECTS`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: "${fn()}")`)
  )
  .add("cnbuilder  ", () => cnb({ foo: true, bar: true, bax: true, bux: false }, { baz: true, bax: false, bux: true }))
  .add("classcat   ", () =>
    classcat([{ foo: true, bar: true, bax: true, bux: false }, { baz: true, bax: false, bux: true }])
  )
  .add("classnames ", () =>
    classnames({ foo: true, bar: true, bax: true, bux: false }, { baz: true, bax: false, bux: true })
  )
  .add("clsx       ", () => clsx({ foo: true, bar: true, bax: true, bux: false }, { baz: true, bax: false, bux: true }))
  .run();

console.log(`\n# ARRAYS`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: "${fn()}")`)
  )
  .add("cnbuilder  ", () => cnb(["foo", "bar"], ["baz", "bax", "bux"]))
  .add("classcat   ", () => classcat([["foo", "bar"], ["baz", "bax", "bux"]]))
  .add("classnames ", () => classnames(["foo", "bar"], ["baz", "bax", "bux"]))
  .add("clsx       ", () => clsx(["foo", "bar"], ["baz", "bax", "bux"]))
  .run();

console.log(`\n# NESTED ARRAYS`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: "${fn()}")`)
  )
  .add("cnbuilder  ", () => cnb(["foo", ["bar"]], ["baz", ["bax", ["bux"]]]))
  .add("classcat   ", () => classcat([["foo", ["bar"]], ["baz", ["bax", ["bux"]]]]))
  .add("classnames ", () => classnames(["foo", ["bar"]], ["baz", ["bax", ["bux"]]]))
  .add("clsx       ", () => clsx(["foo", ["bar"]], ["baz", ["bax", ["bux"]]]))
  .run();

console.log(`\n# OBJECTS NESTED IN ARRAYS`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: "${fn()}")`)
  )
  .add("cnbuilder  ", () => cnb(["foo", { bar: true, bax: true, bux: false }], ["bax", { bax: false, bux: true }]))
  .add("classcat   ", () =>
    classcat([["foo", { bar: true, bax: true, bux: false }], ["bax", { bax: false, bux: true }]])
  )
  .add("classnames ", () =>
    classnames(["foo", { bar: true, bax: true, bux: false }], ["bax", { bax: false, bux: true }])
  )
  .add("clsx       ", () => clsx(["foo", { bar: true, bax: true, bux: false }], ["bax", { bax: false, bux: true }]))
  .run();

console.log(`\n# MIXED`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: "${fn()}")`)
  )
  .add("cnbuilder  ", () => cnb("foo", "bar", { bax: true, bux: false }, ["baz", { bax: false, bux: true }]))
  .add("classcat   ", () => classcat(["foo", "bar", { bax: true, bux: false }, ["baz", { bax: false, bux: true }]]))
  .add("classnames ", () => classnames("foo", "bar", { bax: true, bux: false }, ["baz", { bax: false, bux: true }]))
  .add("clsx       ", () => clsx("foo", "bar", { bax: true, bux: false }, ["baz", { bax: false, bux: true }]))
  .run();

console.log(`\n# MIXED WITH WRONG DATA`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: "${fn()}")`)
  )
  .add("cnbuilder  ", () =>
    cnb("foo", "bar", undefined, () => {}, { bax: true, bux: false, 123: true }, [
      "baz",
      { bax: false, bux: true, abc: null },
      {}
    ])
  )
  .add("classcat   ", () =>
    classcat([
      "foo",
      "bar",
      undefined,
      () => {},
      { bax: true, bux: false, 123: true },
      ["baz", { bax: false, bux: true, abc: null }, {}]
    ])
  )
  .add("classnames ", () =>
    classnames("foo", "bar", undefined, () => {}, { bax: true, bux: false, 123: true }, [
      "baz",
      { bax: false, bux: true, abc: null },
      {}
    ])
  )
  .add("clsx       ", () =>
    clsx("foo", "bar", undefined, () => {}, { bax: true, bux: false, 123: true }, [
      "baz",
      { bax: false, bux: true, abc: null },
      {}
    ])
  )
  .run();
