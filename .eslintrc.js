module.exports = {
  extends: ['@mrowa96/eslint-config-react/base'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['@mrowa96/eslint-config-react/typescript'],
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      extends: ['@mrowa96/eslint-config-react/typescript-test'],
    },
  ],
};
