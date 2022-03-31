module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 'off',
    'quotes': 'off',
    'quote-props': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-cycle': 'off',
  },
};
