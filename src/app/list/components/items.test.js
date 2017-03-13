import React from 'react';
import { mount, render } from 'enzyme';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { Items } from './items';
import { store } from '../../store/store';

describe('Test for #ItemList', () => {
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
    const list = {
        author: {},
        categories: [],
        items: []
    }
    for (let i = 0; i <= 4; i++) {
        let newItem = { ...item, id: 'ML392394' + i }
        list.items.push(newItem);
    }
    const newStore = store();
    newStore.dispatch({ type: 'REQUEST_LIST_SUCCESS', payload: list });
    it('It should exists', () => {
        const wrapper = mount(<Provider store={newStore}><Items /></Provider>);
        expect(wrapper).to.be.exits;
    });
    it('It should have 4 cards', () => {
        const wrapper = mount(<Provider store={newStore}><Items /></Provider>);
        expect(wrapper.find('.item-card').length).to.be.equals(4);
    });
});