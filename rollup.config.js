import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  {
    input: './src/index.ts',

    output: [
      {
        file: pkg.esnext,
        format: 'es',
      },
    ],

    plugins: [
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext',
            target: 'esnext',
            declaration: true,
            declarationDir: 'dist',
          },
        },
      }),
      terser(),
    ],
  },
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
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext',
            target: 'es3',
          },
        },
      }),
      terser(),
    ],
  },
];
