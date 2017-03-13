import React from 'react';
import { render, mount } from 'enzyme';
import { browserHistory } from 'react-router'
import sinon from 'sinon';
import { expect } from 'chai';
import { Search } from './search';

describe('Test for #Search', () => {
    it('It should exists', () => {
        const wrapper = render(<Search />);
        expect(wrapper).to.be.exits;
    });
    it('It should push value on click', () => {
        const wrapper = mount(<Search />);
        const button = wrapper.find('button');
        const input = wrapper.find('input');
        input.node.value = 'User has searched for somethig';
        const onButtonClick = sinon.spy(browserHistory, 'push')
        button.simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });
});