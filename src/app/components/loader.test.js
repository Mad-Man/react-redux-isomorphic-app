import React from 'react';
import {render} from 'enzyme';
import {expect} from 'chai';
import {Loader} from './loader';

describe('Test for #Loader', () => {
  it('should exists', () => {
    const wrapper = render(<Loader />);
    expect(wrapper).to.be.exits;
  });
});