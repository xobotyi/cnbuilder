import ts from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default [
  {
    input: "./src/index.ts",

    output: [
      {
        file: pkg.esnext,
        format: "es"
      }
    ],

    plugins: [
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: "esnext",
            target: "esnext"
          }
        }
      })
    ]
  },
  {
    input: "./src/index.ts",

    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        exports: "named"
      },
      {
        file: pkg.module,
        format: "esm"
      }
    ],

    plugins: [
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: "esnext",
            target: "es3"
          }
        }
      })
    ]
  }
];
