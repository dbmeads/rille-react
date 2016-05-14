import {Component} from '../lib/index';
import {Store} from 'rille';
import {expect} from 'chai';
import {renderToStaticMarkup} from 'react-dom/server';

describe('Component', () => {
    var Profile;
    var store;

    before(() => {
        store = Store();

        Profile = Component({
            store: store('/profile'),
            render() {
                var name = this.entry ? this.entry[1].name : '';
                return <div>{name}</div>
            }
        });
    });

    it('should render route', () => {
        store('/profile').push({name: 'Jim'});

        expect(renderToStaticMarkup(<Profile></Profile>).indexOf('Jim')).to.be.above(0);
    });
});
