import React from 'react';
import {} from 'jest';

import {shallow} from 'enzyme';
import Button from '../Button/Button';
import { assert } from 'chai';

describe('Button Component',()=> {

    it('Contains classname',()=> {
        const wrapper = shallow(<Button/>);
        const className = wrapper.find('.fa4');
        assert.equal(className.length, 1);
     });

     it('Contains Button',()=> {
        const wrapper = shallow(<Button/>);
        expect(wrapper).toBeDefined();
     });

     it('Simulate Mock Fn', () => {
        const mockFn = jest.fn();
        const tree = shallow(
            <button className="fa4" onClick={mockFn} />
        );
        tree.simulate('click');
        expect(mockFn).toHaveBeenCalled();
      });
   });