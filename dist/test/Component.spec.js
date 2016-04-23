'use strict';

var _Component = require('../lib/Component');

var _Component2 = _interopRequireDefault(_Component);

var _rille = require('rille');

var _utils = require('./utils');

var _chai = require('chai');

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Component', function () {
    var Profile;
    var router;

    before(function (done) {
        (0, _rille.Router)(function (r) {
            router = r;
            Profile = (0, _Component2.default)({
                store: router.route('/profile'),
                render: function render() {
                    name = this.entry ? this.entry[1].name : '';
                    return React.createElement(
                        'div',
                        null,
                        name
                    );
                }
            });
            done();
        });
    });

    it('should render route', function () {
        router.push('/profile', { name: 'Jim' });

        (0, _chai.expect)((0, _server.renderToStaticMarkup)(React.createElement(Profile, null)).indexOf('Jim')).to.be.above(0);
    });
});