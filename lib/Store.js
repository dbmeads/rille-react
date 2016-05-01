import {Route} from 'rille';

function Store() {
    return Route({
        route(route) {
            route.entry = undefined;
            route.subscribe((...entry) => {
                route.entry = entry;
            });
        },
        makePublic(target, route) {
            target.entry = () => route.entry;
        }
    })
}

export default Store;
export {Store};