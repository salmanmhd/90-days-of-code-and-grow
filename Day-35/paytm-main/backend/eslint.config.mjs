import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    // Apply to all JavaScript files
    files: ['**/*.js'],
    languageOptions: {
      // Set source type for CommonJS (node environment)
      sourceType: 'commonjs',
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser, // Browser-specific globals like 'window'
        ...globals.node, // Node.js-specific globals like 'require', 'process'
      },
    },
    rules: {
      'no-unused-vars': 'warn', // Warn for unused variables
      'no-undef': 'error', // Throw error for undefined variables
      'no-console': 'off', // Allow console logs (optional)
      'prettier/prettier': 'error', // Integrate Prettier formatting
    },
  },
  pluginJs.configs.recommended,
];
