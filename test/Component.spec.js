import Component from '../lib/Component';
import {Router} from 'rille';
import {find,renderIntoDocument} from './utils';
import {expect} from 'chai';
import {renderToStaticMarkup} from 'react-dom/server';

describe('Component', () => {
    var Profile;
    var router;

    before(done => {
        Router(r => {
            router = r;
            Profile = Component({
                store: router.route('/profile'),
                render() {
                    name = this.entry ? this.entry[1].name : '';
                    return <div>{name}</div>
                }
            });
            done();
        });
    });

    it('should render route', () => {
        router.push('/profile', {name: 'Jim'});

        expect(renderToStaticMarkup(<Profile></Profile>).indexOf('Jim')).to.be.above(0);
    });
});
