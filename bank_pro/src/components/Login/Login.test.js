import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import Login from './Login';

describe('Initial state', () => {
    it('has false login state with empty query', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/Login']}>
                <Login />
            </MemoryRouter>
        );
        const tested = wrapper.find('Login');
        expect(tested.state('loginFail')).to.equal(false);
    });

    it('has undefined status of login', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/Login']}>
                <Login />
            </MemoryRouter>
        );
        const tested = wrapper.find('Login');
        expect(tested.state('status')).to.equal("");
    });
});