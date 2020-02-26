# @rvshare/shims-replacement

webpack module replacements for shims/polyfill packages. This is used to replace shims in third party modules with native implementations, which in turn are polyfilled independently in the application.

 Inspiration: https://twitter.com/lencioni/status/1199719613509980160

 Source: https://gist.github.com/lencioni/6bccd9e5071271da4175776de29f25d0

## Usage

```js
// your webpack.config file
const shimsReplacements = require ('@rvshare/shims-replacement')

plugins: [
    ...shimsReplacements().map(
    ([regex, filePath]) => new webpack.NormalModuleReplacementPlugin(regex, filePath),
    ),
]
```
