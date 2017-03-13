import React from 'react';
import { mount, render } from 'enzyme';
import { browserHistory } from 'react-router';
import { expect } from 'chai';
import { ItemCard } from './item-card';
import { store } from '../../store/store';

describe('Test for #ItemCard', () => {
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
    let lastItem = true;
    it('It should exists', () => {
        const wrapper = mount(<ItemCard store={newStore} item={item} lastItem={lastItem} />);
        expect(wrapper).to.be.exits;
    });
    it('It should have a title', () => {
        const wrapper = mount(<ItemCard store={newStore} item={item} lastItem={lastItem} />);
        expect(wrapper.find('.item-title').text()).to.be.equals('some title');
    });
    it('It should have a price', () => {
        const wrapper = mount(<ItemCard store={newStore} item={item} lastItem={lastItem} />);
        expect(wrapper.find('.price-amount').parent().text()).to.be.equals('$ 20099');
    });

});