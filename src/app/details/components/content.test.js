import React from 'react';
import { render, mount } from 'enzyme';
import { expect } from 'chai';
import { DetailsContent } from './content';

describe('Test for #DetailsContent', () => {
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
        const wrapper = render(<DetailsContent item={item} />);
        expect(wrapper).to.be.exits;
    });
});