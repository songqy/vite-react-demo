module.exports = {
  plugins: ['prettier'],
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
  ],
  ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-plusplus': 0,
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    // 'indent': ['error', 2],
    // 'comma-dangle': ['error',  {
    //   'arrays': 'always-multiline',
    //   'objects': 'always-multiline',
    //   'imports': 'always-multiline',
    //   'exports': 'always-multiline',
    //   'functions': 'never',
    // }],
    'comma-spacing': 2, //强制在逗号周围使用空格
    'key-spacing': 2, // 在对象字面量的键和值之间使用一致的空格
    'keyword-spacing': 2, // 关键字周围空格的一致性
  },
};
