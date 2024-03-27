module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "@typescript-eslint",
    "jsx-a11y",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    indent: "off",
    "react/prop-types": "off",
    semi: ["error", "always"],
    "react/display-name": "off",
    quotes: ["error", "single"],
    "react/jsx-indent": ["error", 2],
    "react/react-in-jsx-scope": "off",
    "linebreak-style": ["error", "unix"],
    "react/jsx-indent-props": ["error", 2],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Function: false,
        },
        extendDefaults: true,
      },
    ],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
