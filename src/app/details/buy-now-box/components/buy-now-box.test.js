import React from 'react';
import { render, mount } from 'enzyme';
import { expect } from 'chai';
import { BuyNowBox } from './buy-now-box';

describe('Test for #BuyNow', () => {
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
    it('It should exists', () => {
        const wrapper = render(<BuyNowBox item={item} />);
        expect(wrapper).to.be.exits;
    });
    it('It should have a button', () => {
        const wrapper = mount(<BuyNowBox item={item} />);
        const button = wrapper.find('button');
        expect(button).to.be.exist;
    });
});