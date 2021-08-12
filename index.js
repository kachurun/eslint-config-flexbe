const rules = require('./lib/rules');

const settings = require('./lib/settings');
const plugins = require('./lib/plugins');
const globals = require('./lib/globals');
const env = require('./lib/env');
const parser = require('./lib/parser');
const typescript = require('./lib/typescript');

module.exports = {
    extends: ['airbnb-base', 'plugin:jest/recommended'],

    ...parser,
    settings,
    plugins,
    rules,
    globals,
    env,

    overrides: [
        typescript
    ]
};
