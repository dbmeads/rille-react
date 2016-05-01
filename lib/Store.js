import {Route} from 'rille';

function Store() {
    return Route({
        route(_route) {
            _route.entry = undefined;
            _route.subscribe((...entry) => {
                _route.entry = entry;
            });
        },
        wrap(_route, route) {
            route.entry = () => {
                return _route.entry;
            }
        }
    })
}

export default Store;
export {Store};