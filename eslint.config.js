// eslint.config.js
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import vue from 'eslint-plugin-vue';
import vuetify from 'eslint-plugin-vuetify';
import vueParser from 'vue-eslint-parser';

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      vuetify,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': ['error', 2],
      'vue/script-setup-uses-vars': 'error',
      'vuetify/no-deprecated-classes': 'warn',
      'simple-import-sort/imports': 'error',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          singleQuote: true,
          printWidth: 100,
          trailingComma: 'es5',
        },
      ],
      'simple-import-sort/imports': 'error',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          singleQuote: true,
          printWidth: 100,
          trailingComma: 'es5',
        },
      ],
      'simple-import-sort/imports': 'error',
    },
  },
];
