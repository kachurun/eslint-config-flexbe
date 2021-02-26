module.exports = {
    parser: '@babel/eslint-parser',

    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            globalReturn: true,
        },
    }
};
