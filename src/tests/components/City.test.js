import React from 'react';
import { shallow } from 'enzyme';
import City from '../../components/City';

it('City component renders correctly', () => {
  const city = {
    name: 'London',
    country: 'GB',
    population: 1000000,
    coord: {
      lat: 51.073,
      lon: -0.1277,
    },
  };
  const wrapper = shallow(<City city={city} />);
  expect(wrapper).toMatchSnapshot();
});
