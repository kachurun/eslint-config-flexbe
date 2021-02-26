module.exports = {
    // TS
    'indent': ['error', 4, {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        MemberExpression: 1,
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1
    }],

    'comma-dangle': ['error', {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never'
    }],

    'semi': ['error', 'always', {
        omitLastInOneLineBlock: true
    }],

    'brace-style': ['error', 'stroustrup'],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false, arraysInObjects: false }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'no-loop-func': 0,

    'no-shadow': [0, {
        builtinGlobals: true,
        hoist: 'functions',
        allow: ['data', '$area', 'index']
    }],

    'no-use-before-define': ['error', {
        functions: false
    }],

    // optimize regexp
    'optimize-regex/optimize-regex': 'warn',
    // checks for promises
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'off',
    'promise/no-return-in-finally': 'warn',

    // Import
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,

    // No-Loops
    'no-loops/no-loops': 'warn',

    // ESLint
    'no-mixed-operators': 0,
    'prefer-destructuring': 0,
    strict: 0,
    curly: 0,
    'class-methods-use-this': 0,
    'no-trailing-spaces': 0,

    'func-style': ['error', 'declaration', {
        allowArrowFunctions: true
    }],

    'no-prototype-builtins': 0,
    'no-nested-ternary': 0,
    'no-unneeded-ternary': 'error',

    'space-before-blocks': ['error', 'always'],

    'max-len': 0,
    'func-names': ['error', 'never'],
    'consistent-return': 0,
    eqeqeq: [1, 'smart'],
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-tabs': 2,
    'key-spacing': 0,
    'no-multi-spaces': ['error', {
        exceptions: {
            IfStatement: true, AssignmentExpression: true, Property: true, VariableDeclarator: true, ImportDeclaration: true
        }
    }],
    'no-console': [1, {
        allow: ['warn', 'error']
    }],
    'no-bitwise': 0,
    camelcase: 1,
    'no-new': 1,
    'arrow-body-style': ['error', 'as-needed'],
    'no-plusplus': ['error', {
        allowForLoopAfterthoughts: true
    }],
    'no-continue': 0,
    'no-restricted-syntax': 0,

    'new-cap': ['error', {
        newIsCap: true,
        capIsNew: true,
        properties: false
    }],

    'template-curly-spacing': [2, 'always'],
    'no-multiple-empty-lines': 0,

    'object-curly-newline': 'off'
};
