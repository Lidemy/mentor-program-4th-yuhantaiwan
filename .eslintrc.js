module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-use-before-define": ["error", { "functions": false }],
    "no-shadow": ["error", { "allow": ["lines"] }],
  },
};
