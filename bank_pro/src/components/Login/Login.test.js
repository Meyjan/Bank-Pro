import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import Login from './Login';
import { format } from 'path';

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

// describe('Calls submit function', () => {
//     it('calls submit function', () => {
//         const wrapper = mount (
//             <MemoryRouter initialEntries={['/Login']}>
//                 <Login />
//             </MemoryRouter>
//         );

//         const spyFunction = jest.spyOn(Login.prototype, 'handleLogin');
//         const tested = wrapper.find('Login').find('LoginForm').find('form');
//         const input = tested.find('input').first();
//         input.simulate('change', {target: {value: '0'}});
//         tested.simulate('submit');
//         expect(spyFunction).toHaveBeenCalled();
//     });
// });