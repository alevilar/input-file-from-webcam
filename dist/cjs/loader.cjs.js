'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-97ab21e5.js');

/*
 Stencil Client Patch Esm v3.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["input-file-from-webcam.cjs",[[1,"input-file-from-webcam",{"width":[2],"height":[2],"facingMode":[1,"facing-mode"],"drawImageCb":[16],"__facingMode":[32],"takePic":[64]},[[0,"click","onClickHandler"]]]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map