const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ANALYZE_BUILD = process.env.ANALYZE_BUILD === '1';

const babelLoader = {
  loader: 'babel-loader',
  options: { cacheDirectory: true, cacheCompression: true, compact: true },
};

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        oneOf: [
          {
            test: /\.(ts)$/,
            include: path.resolve(__dirname, 'src'),
            use: [
              babelLoader,
              {
                loader: 'ts-loader',
              },
            ],
          },
          // {
          //   test: /\.(js)$/,
          //   include: path.resolve(__dirname, 'src'),
          //   use: [babelLoader],
          // },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: ANALYZE_BUILD ? 'static' : 'disabled',
    }),
  ],
  devtool: false,
  stats: {
    assets: true,
    children: false,
    entrypoints: false,
    chunks: false,
    colors: true,
    performance: false,
    usedExports: false,
    modules: false,
  },
};
