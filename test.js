const assert = require('assert');
const plugin = require('.');

const { customizeWebpackConfig } = plugin();
const modifiedConfig = customizeWebpackConfig({ module: { rules: [] } });

assert.strictEqual(modifiedConfig.module.rules.length, 1);
