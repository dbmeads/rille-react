import React from 'react';

global.React = React;

function Component(spec) {
    const {getInitialState, componentDidMount, componentWillUnmount} = spec;

    return React.createClass(Object.assign(spec, {
        getInitialState() {
            var store = this.store = (this.props && this.props.store) || spec.store;
            if (store) {
                this.entry = store.entry();
                return null;
            }
            return getInitialState ? getInitialState.call(this) : null;
        },
        componentDidMount() {
            if (this.store) {
                this.unsubscribe = this.store.subscribe(function (...entry) {
                    this.entry = entry;
                    this.forceUpdate();
                }.bind(this));
            }
            return componentDidMount ? componentDidMount.call(this) : undefined;
        },
        componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
            return componentWillUnmount ? componentWillUnmount.call(this) : undefined;
        }
    }));
};

export default Component;
export {Component};