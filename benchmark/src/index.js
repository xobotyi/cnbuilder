import { Suite } from "benchmark";
import classcat from "classcat";
import classnames from "classnames";
import clsx from "clsx";
import cnbuilder from "./../../dist/cnbuilder.esm.js";

function runBench(tests, modules) {
  return Object.keys(tests).map((name, i) => {
    console.log(`${i > 0 ? "\n" : ""}${name}`);
    Object.keys(modules)
      .reduce(
        (bench, id) => bench.add(id, tests[name].bind({}, modules[id])),
        new Suite().on(
          "cycle",
          ({ target: { name, hz } }) => console.log(arguments)
          //console.log(`${ name } × ${ Math.floor(hz).toLocaleString() } ops/sec`),
        )
      )
      .run();
  });
}

const testData = {
  "# STRINGS": ["foo", "bar", "baz", "bax", "bux"],
  "# OBJECTS": [
    { foo: true, bar: true, bax: true, bux: false },
    { baz: true, bax: false, bux: true }
  ],
  "# ARRAYS": [["foo", "bar"], ["baz", "bax", "bux"]],
  "# NESTED ARRAYS": [["foo", ["bar"]], ["baz", ["bax", ["bux"]]]],
  "# OBJECTS NESTED IN ARRAYS": [
    ["foo", { bar: true, bax: true, bux: false }],
    ["bax", { bax: false, bux: true }]
  ],
  "# MIXED": [
    "foo",
    "bar",
    { bax: true, bux: false },
    ["baz", { bax: false, bux: true }]
  ]
};

const modules = { classnames, clsx, classcat, cnbuilder };

console.log(`\n# STRINGS`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(
      `${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: ${fn()})`
    )
  )
  .add("classcat   ", () => classcat(["foo", "bar", "baz", "bax", "bux"]))
  .add("classnames ", () => classnames("foo", "bar", "baz", "bax", "bux"))
  .add("clsx       ", () => clsx("foo", "bar", "baz", "bax", "bux"))
  .add("cnbuilder  ", () => cnbuilder("foo", "bar", "baz", "bax", "bux"))
  .run();

console.log(`\n# OBJECTS`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(
      `${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: ${fn()})`
    )
  )
  .add("classcat   ", () =>
    classcat([
      { foo: true, bar: true, bax: true, bux: false },
      { baz: true, bax: false, bux: true }
    ])
  )
  .add("classnames ", () =>
    classnames(
      { foo: true, bar: true, bax: true, bux: false },
      { baz: true, bax: false, bux: true }
    )
  )
  .add("clsx       ", () =>
    clsx(
      { foo: true, bar: true, bax: true, bux: false },
      { baz: true, bax: false, bux: true }
    )
  )
  .add("cnbuilder  ", () =>
    cnbuilder(
      { foo: true, bar: true, bax: true, bux: false },
      { baz: true, bax: false, bux: true }
    )
  )
  .run();

console.log(`\n# ARRAYS`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(
      `${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: ${fn()})`
    )
  )
  .add("classcat   ", () => classcat([["foo", "bar"], ["baz", "bax", "bux"]]))
  .add("classnames ", () => classnames(["foo", "bar"], ["baz", "bax", "bux"]))
  .add("clsx       ", () => clsx(["foo", "bar"], ["baz", "bax", "bux"]))
  .add("cnbuilder  ", () => cnbuilder(["foo", "bar"], ["baz", "bax", "bux"]))
  .run();

console.log(`\n# NESTED ARRAYS`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(
      `${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: ${fn()})`
    )
  )
  .add("classcat   ", () =>
    classcat([["foo", ["bar"]], ["baz", ["bax", ["bux"]]]])
  )
  .add("classnames ", () =>
    classnames(["foo", ["bar"]], ["baz", ["bax", ["bux"]]])
  )
  .add("clsx       ", () => clsx(["foo", ["bar"]], ["baz", ["bax", ["bux"]]]))
  .add("cnbuilder  ", () =>
    cnbuilder(["foo", ["bar"]], ["baz", ["bax", ["bux"]]])
  )
  .run();

console.log(`\n# OBJECTS NESTED IN ARRAYS`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(
      `${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: ${fn()})`
    )
  )
  .add("classcat   ", () =>
    classcat([
      ["foo", { bar: true, bax: true, bux: false }],
      ["bax", { bax: false, bux: true }]
    ])
  )
  .add("classnames ", () =>
    classnames(
      ["foo", { bar: true, bax: true, bux: false }],
      ["bax", { bax: false, bux: true }]
    )
  )
  .add("clsx       ", () =>
    clsx(
      ["foo", { bar: true, bax: true, bux: false }],
      ["bax", { bax: false, bux: true }]
    )
  )
  .add("cnbuilder  ", () =>
    cnbuilder(
      ["foo", { bar: true, bax: true, bux: false }],
      ["bax", { bax: false, bux: true }]
    )
  )
  .run();

console.log(`\n# MIXED`);
new Suite()
  .on("cycle", ({ target: { name, hz, fn } }) =>
    console.log(
      `${name} × ${Math.floor(hz).toLocaleString()} ops/sec; (result: ${fn()})`
    )
  )
  .add("classcat   ", () =>
    classcat([
      "foo",
      "bar",
      { bax: true, bux: false },
      ["baz", { bax: false, bux: true }]
    ])
  )
  .add("classnames ", () =>
    classnames("foo", "bar", { bax: true, bux: false }, [
      "baz",
      { bax: false, bux: true }
    ])
  )
  .add("clsx       ", () =>
    clsx("foo", "bar", { bax: true, bux: false }, [
      "baz",
      { bax: false, bux: true }
    ])
  )
  .add("cnbuilder  ", () =>
    cnbuilder("foo", "bar", { bax: true, bux: false }, [
      "baz",
      { bax: false, bux: true }
    ])
  )
  .run();
