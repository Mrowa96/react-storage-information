module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/*.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.ts'],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
