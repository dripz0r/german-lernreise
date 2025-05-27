// eslint.config.js
import js from '@eslint/js';
import next from 'eslint-config-next';

export default [
  js.configs.recommended,
  next,
  {
    ignores: ['node_modules', '.next', 'public', 'out', 'dist'],
    rules: {
      'prettier/prettier': 'error',
      'react/no-unescaped-entities': 'off', // optional: disable quote escaping
    },
  },
];
