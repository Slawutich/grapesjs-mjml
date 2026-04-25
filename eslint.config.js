const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['src/**/*.{js,ts}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      indent: ['error', 2],
      semi: ['error', 'always'],
    },
  },
];