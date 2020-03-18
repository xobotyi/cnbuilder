import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const plugins = [terser()];

module.exports = [
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    plugins: [
      ...plugins,
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext',
            target: 'es3',
          },
        },
      }),
    ],
  },
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.esnext,
        format: 'es',
      },
    ],
    plugins: [
      ...plugins,
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext',
            target: 'esnext',
            declaration: true,
          },
        },
      }),
    ],
  },
];
