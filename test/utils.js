import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

for (let key in window) {
    if (window.hasOwnProperty(key) && !(key in global))
        global[key] = window[key];
}

const utils = require('react-testutils-additions');
const {find, renderIntoDocument} = utils;

export default utils;
export {find, renderIntoDocument};