'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderIntoDocument = exports.find = undefined;

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.document = _jsdom2.default.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

for (var key in window) {
    if (window.hasOwnProperty(key) && !(key in global)) global[key] = window[key];
}

var utils = require('react-testutils-additions');
var find = utils.find;
var renderIntoDocument = utils.renderIntoDocument;
exports.default = utils;
exports.find = find;
exports.renderIntoDocument = renderIntoDocument;