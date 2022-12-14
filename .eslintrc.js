/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

const path = require('path');

module.exports = {
    root: true,
    extends: [
        "prettier",
        "plugin:jsx-a11y/recommended",
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/eslint-recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
            arrowFunctions: true,
        },
    },
    plugins: ["react", "@typescript-eslint", "prettier", "formatjs"],
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                paths: ["./src"],
                moduleDirectory: ["node_modules", "src"],
                alias: {
                    map: [['@', path.resolve(__dirname, 'src')]],
                }
            },
        },
    },
    rules: {
        // Existing rules
        "formatjs/no-offset": "error",
        "comma-dangle": "off", // https://eslint.org/docs/rules/comma-dangle
        "function-paren-newline": "off", // https://eslint.org/docs/rules/function-paren-newline
        "global-require": "off", // https://eslint.org/docs/rules/global-require
        "import/no-dynamic-require": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        "no-debugger": "off",
        "no-inner-declarations": "off", // https://eslint.org/docs/rules/no-inner-declarations
        // New rules
        "class-methods-use-this": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": 'off',
        "jsx-a11y/no-autofocus": 'off',
    },
};