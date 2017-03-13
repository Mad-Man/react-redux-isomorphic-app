import React from 'react';
import { render, mount } from 'enzyme';
import { expect } from 'chai';
import { Details } from './details';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

describe('Test for #Details', () => {
    const item = {
        id: 'ML3923949',
        picture: 'foo/bar.jpg',
        title: 'some title',
        free_shipping: false,
        address: {
            state_name: 'CABA'
        },
        price: {
            amount: 200,
            currency: 'ARS',
            decimals: 99
        }
    };
    const newStore = store();
    newStore.dispatch({ type: 'REQUEST_DETAILS_SUCCESS', payload: item });
    it('It should exists', () => {
        const wrapper = render(<Provider store={newStore}><Details /></Provider>);
        expect(wrapper).to.be.exits;
    });
     it('It should have sent the correct data to the store', () => {
        let state = newStore.getState();
        expect(state.details.details).to.be.equals(item)
    });
});