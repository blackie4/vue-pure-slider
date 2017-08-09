module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module'
  },
  'plugins': ['html'],
  'rules': {
    'no-alert': 2,
    'no-var': 2,
    'eqeqeq': 2,
    'strict': 2,
    'comma-dangle': 1,
    'comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': 1,
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'consistent-this': ['error', 'that']
  }
};