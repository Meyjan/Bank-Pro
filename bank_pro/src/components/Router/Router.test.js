import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import {Cookies} from 'universal-cookie';

describe('Test without cookie', () => {
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

describe('Test with cookie', () => {
    it('renders without crashing too', () => {
        jest.mock(Cookies, ()=> ({get: () => {login: 'test'}}));
        const div = document.createElement('div');
        ReactDOM.render(
            <Router />
            , div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})