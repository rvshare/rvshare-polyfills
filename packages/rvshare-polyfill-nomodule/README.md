# @rvshare/polyfill-nomodule

Fork of [@next/polyfill-nomodule](https://github.com/zeit/next.js/blob/3b28702983bc7212e40aa454c0e1ae53b41fe763/packages/next-polyfill-nomodule/package.json).

Package which contains any polyfills needed for older browsers. This package is then meant to be used by importing it via `<script type="text/javascript" nomodule src="<get location of this module>">`. Modern browser will not load this then.

## Usage

```js
// some entry file which will go in the `src` of your script tag
import '@rvshare/polyfill-nomodule';
```
