import React from 'react';
import { shallow } from 'enzyme';
import { Main } from '../../components/Main';

it('Main component renders correctly', () => {
  const wrapper = shallow(<Main />);
  expect(wrapper).toMatchSnapshot();
});
