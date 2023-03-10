'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4bc4af0e.js');

/*
 Stencil Client Patch Browser v3.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('input-file-from-webcam.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["input-file-from-webcam.cjs",[[1,"input-file-from-webcam",{"width":[2],"height":[2],"facingMode":[1537,"facing-mode"],"drawImageCb":[16],"takePic":[64],"toggleCamera":[64]},[[0,"click","onClickHandler"]]]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=input-file-from-webcam.cjs.js.map