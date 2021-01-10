module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-mixed-spaces-and-tabs': [0],
    singleQuote: 0,
    'space-before-function-paren': 0,
    'no-unused-vars': 'warn', //把该条提示信息转换成警告信息
    "@typescript-eslint/ban-ts-ignore": "off"  // ts禁用某一条规则会报错
  }
}
