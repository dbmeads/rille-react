'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Store = undefined;

var _rille = require('rille');

function Store() {
    return (0, _rille.Route)({
        route: function route(_route) {
            _route.entry = undefined;
            _route.subscribe(function () {
                for (var _len = arguments.length, entry = Array(_len), _key = 0; _key < _len; _key++) {
                    entry[_key] = arguments[_key];
                }

                _route.entry = entry;
            });
        },
        wrap: function wrap(_route, route) {
            route.entry = function () {
                return _route.entry;
            };
        }
    });
}

exports.default = Store;
exports.Store = Store;