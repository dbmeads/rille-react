import React from 'react';

global.React = React;

function Component(spec) {
    const {getInitialState, getStore, componentDidMount, componentWillUnmount} = spec;

    return React.createClass(Object.assign(spec, {
        getInitialState() {
            var store = this.store = getStore ? getStore.call(this) : (this.props && this.props.store) || spec.store;
            if (store) {
                var unsubscribe;

                this.entry = store.entry();

                this.componentDidMount = function () {
                    unsubscribe = store.subscribe(function (...entry) {
                        this.entry = entry;
                        this.forceUpdate();
                    }.bind(this));
                    return componentDidMount ? componentDidMount.call(this) : undefined;
                };
                this.componentWillUnmount = function () {
                    unsubscribe();
                    return componentWillUnmount ? componentWillUnmount.call(this) : undefined;
                }
            }
            return getInitialState ? getInitialState.call(this) : null;
        }
    }));
};

export default Component;
export {Component};