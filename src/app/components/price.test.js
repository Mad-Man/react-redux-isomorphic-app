import React from 'react';
import { render, mount } from 'enzyme';
import { expect } from 'chai';
import { Price } from './price';

describe('Test for #Price', () => {
    let item = {
        price: {
            amount: 1000,
            currency: 'ARS',
            decimals: 99
        }
    }
  
    it('It should exists', () => {
        const wrapper = render(<Price item={item} />);
        expect(wrapper).to.be.exits;
    });
    it('It should output the correct value', () => {
        const wrapper = mount(<Price item={item} />);
        let price = wrapper.find('span').find('span').first().text();
        expect(price).to.be.equals('$ 1,00099')
    });
    it('It should output the correct currency', () => {
        let item = {
            price: {
                amount: 1000,
                currency: 'USD',
                decimals: 99
            }
        }
        const wrapper = mount(<Price item={item} />);
        let price = wrapper.find('span').find('span').first().text();
        expect(price).to.be.equals('USD 1,00099')
    });
     it('It should output the correct decimals', () => {
        let item = {
            price: {
                amount: 1000,
                currency: 'USD',
                decimals: 44111111
            }
        }
        const wrapper = mount(<Price item={item} />);
        let price = wrapper.find('span').find('span').first().text();
        expect(price).to.be.equals('USD 1,00044')
    });
});