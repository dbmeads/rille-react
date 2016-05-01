'use strict';

var _index = require('../lib/index');

var _chai = require('chai');

var _server = require('react-dom/server');

describe('Component', function () {
    var Profile;
    var store;

    before(function () {
        store = (0, _index.Store)();

        Profile = (0, _index.Component)({
            store: store('/profile'),
            render: function render() {
                var name = this.entry ? this.entry[1].name : '';
                return React.createElement(
                    'div',
                    null,
                    name
                );
            }
        });
    });

    it('should render route', function () {
        store('/profile').push({ name: 'Jim' });

        (0, _chai.expect)((0, _server.renderToStaticMarkup)(React.createElement(Profile, null)).indexOf('Jim')).to.be.above(0);
    });
});