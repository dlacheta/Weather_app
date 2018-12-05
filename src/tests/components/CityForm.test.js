import React from 'react';
import { shallow } from 'enzyme';
import { CityForm } from '../../components/CityForm';

it('CityForm component renders correctly', () => {
  const toogleLoadingDispatch = jest.fn();
  const getWeatherDispatch = jest.fn();
  const wrapper = shallow(
    <CityForm
      toogleLoadingDispatch={toogleLoadingDispatch}
      getWeatherDispatch={getWeatherDispatch}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
