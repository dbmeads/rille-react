'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.Route = exports.Component = undefined;

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

var _rille = require('rille');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RilleReact = { Component: _Component2.default, Route: _rille.Route, Store: _Store2.default };

exports.default = RilleReact;
exports.Component = _Component2.default;
exports.Route = _rille.Route;
exports.Store = _Store2.default;