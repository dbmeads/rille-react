'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.React = _react2.default;

function Component(spec) {
    var _getInitialState = spec.getInitialState;
    var _componentDidMount = spec.componentDidMount;
    var _componentWillUnmount = spec.componentWillUnmount;


    return _react2.default.createClass(Object.assign(spec, {
        getInitialState: function getInitialState() {
            var store = this.store = this.props && this.props.store || spec.store;
            if (store) {
                this.entry = store.entry();
                return null;
            }
            return _getInitialState ? _getInitialState.call(this) : null;
        },
        componentDidMount: function componentDidMount() {
            if (this.store) {
                this.unsubscribe = this.store.subscribe(function () {
                    for (var _len = arguments.length, entry = Array(_len), _key = 0; _key < _len; _key++) {
                        entry[_key] = arguments[_key];
                    }

                    this.entry = entry;
                    this.forceUpdate();
                }.bind(this));
            }
            return _componentDidMount ? _componentDidMount.call(this) : undefined;
        },
        componentWillUnmount: function componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
            return _componentWillUnmount ? _componentWillUnmount.call(this) : undefined;
        }
    }));
};

exports.default = Component;
exports.Component = Component;