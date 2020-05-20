const typescript = require('@rollup/plugin-typescript');
const visualizer = require('rollup-plugin-visualizer');
const { eslint } = require('rollup-plugin-eslint');
const packageInfo = require('./package.json');

export default {
  input: './src/index.ts',
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
    }),
    typescript(),
    visualizer({
      title: packageInfo.name,
      open: process.env.ANALYZE_BUILD === '1',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  external: ['react'],
  output: {
    file: packageInfo.main,
    format: 'es',
  },
};
