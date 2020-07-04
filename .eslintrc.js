module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['detox', 'jest'],
  parser: 'babel-eslint',
  env: {
    'detox/detox': true,
    'jest/globals': true
  },
}
