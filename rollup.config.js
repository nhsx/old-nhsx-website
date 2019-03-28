import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'app/scripts/main.js',
  output: {
    name: 'main.bundle',
    file: 'public/js/main.bundle.min.js',
    format: 'umd',
  },
  plugins: [
    resolve({
      browser: true,
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    uglify(),
  ],
};
