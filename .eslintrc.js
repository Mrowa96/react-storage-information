module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/standard',
  ],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 10,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
  env: {
    browser: false,
  },
};
