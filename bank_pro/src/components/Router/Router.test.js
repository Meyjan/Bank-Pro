import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

describe('Init state', () => {
    // Testing for render
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router />
            , div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})