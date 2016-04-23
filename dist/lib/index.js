'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.Router = exports.Component = undefined;

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

var _rille = require('rille');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RilleReact = { Component: _Component2.default, Router: _rille.Router, Store: _rille.Store };

exports.default = RilleReact;
exports.Component = _Component2.default;
exports.Router = _rille.Router;
exports.Store = _rille.Store;