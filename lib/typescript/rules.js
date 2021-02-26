const defaultRules = require('../rules');

module.exports = {
    ...defaultRules,

    // TS
    '@typescript-eslint/indent': ['error', 4, {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        MemberExpression: 1,
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1
    }],

    '@typescript-eslint/comma-dangle': ['error', {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never'
    }],

    '@typescript-eslint/semi': ['error', 'always', {
        omitLastInOneLineBlock: true
    }],

    '@typescript-eslint/brace-style': ['error', 'stroustrup'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always', { objectsInObjects: false, arraysInObjects: false }],
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/no-loop-func': 0,

    '@typescript-eslint/no-shadow': [0, {
        builtinGlobals: true,
        hoist: 'functions',
        allow: ['data', '$area', 'index']
    }],
    '@typescript-eslint/no-use-before-define': ['error', {
        functions: false
    }]
};
