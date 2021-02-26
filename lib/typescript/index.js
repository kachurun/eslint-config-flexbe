const parser = require('./parser');
const rules = require('./rules');
const plugins = require('./plugins');

module.exports = {
    extends: ['airbnb-typescript'],
    files: ['*.ts'],
    ...parser,
    rules,
    plugins
};
