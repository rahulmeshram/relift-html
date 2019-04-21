/**
 * Rollup config
 * run: rollup -c
 */
const terser = require('rollup-plugin-terser');
import banner from 'rollup-plugin-banner';
const pkg = require('./package.json');

const topBanner = `${pkg.pkgName} v${pkg.version}
Copyright ${new Date().getFullYear()} Mardix
Released under the MIT License
${pkg.homepage}
--- Big up to:
https://github.com/sindresorhus/on-change
`;

export default {
  input: './src/index.js',
  output: {
    file: './dist/relift.min.js',
    format: 'esm',
  },
  plugins: [terser.terser(), banner(topBanner)],
};