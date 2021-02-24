module.exports = {
    parser: '@typescript-eslint/parser',

    parserOptions: {
        project: './tsconfig.json',
        globalReturn: true,
        ecmaVersion: 2021,
        extraFileExtensions: ['.mjs', '.riot', '.vue']
    }
};
