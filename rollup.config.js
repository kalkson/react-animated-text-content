import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import externalDeps from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';

// import pkg from './package.json';

const external = ['react', 'react-dom'];
const globals = {
  react: 'React',
  uuid: 'uuid',
  'styled-components': 'styled',
};

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        name: 'AnimatedText',
        file: 'dist/react-animated-text-content.development.js',
        format: 'umd',
        exports: 'named',
        sourcemap: true,
        strict: false,
        compact: true,
        globals,
      },
    ],
    plugins: [sass({ insert: true }), typescript()],
    external,
  },
  {
    input: 'src/index.tsx',
    output: [
      {
        name: 'AnimatedText',
        file: 'dist/react-animated-text-content.production.js',
        format: 'umd',
        exports: 'named',
        sourcemap: true,
        strict: true,
        compact: true,
        globals,
      },
    ],
    plugins: [
      sass({ insert: true }),
      typescript(),
      replace({ 'process.env.NODE_ENV': `"production"`, delimiters: ['', ''] }),
      externalDeps(),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
];
