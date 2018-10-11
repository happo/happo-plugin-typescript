# happo-plugin-typescript

A [happo.io](https://github.com/enduire/happo.io) plugin that makes TypeScript development simpler.

## Usage

Add the following to your `.happo.js` configuration file:

```js
// .happo.js
const happoPluginTypescript = require('happo-plugin-typescript');

module.exports = {
  // ...
  plugins: [
    happoPluginTypescript(),
  ],
}
```
