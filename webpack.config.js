const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ANALYZE_BUILD = process.env.ANALYZE_BUILD === '1';

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-storage-information.js',
    library: 'react-storage-information',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
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
              {
                loader: 'ts-loader',
              },
            ],
          },
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
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
  },
};
