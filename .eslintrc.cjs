module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    './node_modules/ts-standard/eslintrc.json',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
  plugins: ['react-refresh'],
  rules: {
    "react/prop-types": "off",
    "no-undef": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "import/no-default-export": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/triple-slash-reference": "off"
  },
}
