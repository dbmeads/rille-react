import React from 'react';

global.React = React;

function Component(spec) {
    const {getInitialState, componentDidMount, componentWillUnmount} = spec;

    return React.createClass(Object.assign(spec, {
        getInitialState() {
            var store = this.store = (this.props && this.props.store) || spec.store;
            if (store) {
                var unsubscribe;

                this.entry = store.entry();

                this.componentDidMount = function () {
                    unsubscribe = route.subscribe(function (...entry) {
                        this.entry = entry;
                        this.forceUpdate();
                    }.bind(this));
                    return componentDidMount ? componentDidMount.call(this) : undefined;
                };
                this.componentWillUnmount = function () {
                    unsubscribe();
                    return componentWillUnmount ? componentWillUnmount.call(this) : undefined;
                }
                return null;
            }
            return getInitialState ? getInitialState.call(this) : null;
        }
    }));
};

export default Component;
export {Component};