import babel from "rollup-plugin-babel";
import ts from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "./src/index.ts",

  output: [
    {
      file: pkg.module,
      format: "es",
      exports: "named"
    },
    {
      file: pkg.main,
      format: "umd",
      name: "cnbuilder",
      sourcemap: true,
      exports: "named"
    }
  ],

  plugins: [
    ts({
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: "ESNext"
        }
      }
    }),
    babel({
      babelrc: false,
      exclude: "node_modules/**",
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: false,
              chrome: "52",
              ie: "11"
            }
          }
        ]
      ]
    })
  ]
};
