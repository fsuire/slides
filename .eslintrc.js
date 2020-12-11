module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/ban-td-comment': 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'always', allow: ['^mock_'] }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'no-extra-boolean-cast': "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-unused-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2
      }
    ]
  }
};
