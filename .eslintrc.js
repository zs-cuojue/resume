module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'prettier/prettier': [
      'error',
      {
        semi: true, // 结尾加分号
        singleQuote: true, // 使用单引号
        'prettier.printWidth': 500, // 超过最大值换行
        tabWidth: 2, // 缩进字节数
        'trailingComma': 'none', // 对象末尾不加逗号
        'arrowParens': 'avoid'
      }
    ]
  },
};
