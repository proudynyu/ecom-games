module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "next/core-web-vitals",
        "airbnb",
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    overrides: [
        {
            files: ["**/*.tsx"],
            rules: {
                "import/no-named-as-default": 0,
                "import/no-named-as-default-member": 0,
                "react/react-in-jsx-scope": 0,
                "import/prefer-default-export": 0,
                "react/jsx-props-no-spreading": 0,
                "react/jsx-curly-brace-presence": 0,
                "react/require-default-props": 0,
                "react/jsx-no-useless-fragment": 0
            },
        },
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: { project: ["./tsconfig.json"] },
    ignorePatterns: ["**/*.config.js", "**/*.config.json", "src/**/*.test.ts"],
};
