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
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: { project: ["./tsconfig.json"] },
    ignorePatterns: ["**/*.config.js", "**/*.config.json", "src/**/*.test.ts"],
};
