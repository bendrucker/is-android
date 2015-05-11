'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
'use strict';

var regex = /android/i;

var _ref = window.navigator || {};

var userAgent = _ref.userAgent;
exports['default'] = regex.test(userAgent);
module.exports = exports['default'];