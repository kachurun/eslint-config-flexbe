const defaultRules = require('../rules');

module.exports = {
    extends: ['airbnb-typescript', 'plugin:jest/recommended'],
    files: ['*.ts', '*.riot'],
    parser: '@typescript-eslint/parser',

    parserOptions: {
        project: './tsconfig.json',
        globalReturn: true,
        ecmaVersion: 2021,
        extraFileExtensions: ['.riot']
    },

    plugins: [
        '@typescript-eslint',
        'babel',
        'promise',
        'optimize-regex',
        'json',
        'html',
        'no-loops'
    ],

    rules: {
        ...defaultRules,

        'lines-between-class-members': 0,
        indent: 0,
        'comma-dangle': 0,
        semi: 0,
        'no-shadow': 0,
        'no-use-before-define': 0,

        'brace-style': 0,
        'object-curly-spacing': 0,
        'keyword-spacing': 0,
        'space-before-function-paren': 0,
        'space-infix-ops': 0,
        'no-loop-func': 0,

        // TS
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        '@typescript-eslint/naming-convention': ['error',
            {
                selector: ['variableLike', 'memberLike'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allowSingleOrDouble',
                trailingUnderscore: 'allow'
            },
            {
                selector: ['objectLiteralProperty'],
                format: ['snake_case', 'camelCase'],
                leadingUnderscore: 'allowSingleOrDouble',
                trailingUnderscore: 'allow'
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow'
            },
            {
                selector: 'typeLike',
                format: ['PascalCase']
            }
        ],

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
            exports: 'only-multiline',
            functions: 'never'
        }],

        '@typescript-eslint/semi': ['error', 'always', {
            omitLastInOneLineBlock: true
        }],

        '@typescript-eslint/brace-style': ['error', 'stroustrup'],
        '@typescript-eslint/object-curly-spacing': ['error', 'always', { objectsInObjects: false, arraysInObjects: true }],
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
    }
};
