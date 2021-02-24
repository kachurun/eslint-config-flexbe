module.exports = Object.assign(
    {
        extends: ['airbnb-typescript']
    },

    require('./lib/settings'),
    require('./lib/plugins'),
    require('./lib/rules'),
    require('./lib/globals'),
    require('./lib/env'),
    require('./lib/parser')
);
