import React from 'react';
import { shallow } from 'enzyme';
import Day from '../../components/Day';

it('Day component renders correctly', () => {
  const today = true;
  const weather = [
    {
      dt: 1539248400,
      dt_txt: '2018-10-11 12:00:00',
      weather: [
        {
          icon: '01d',
          description: 'clear sky',
        },
      ],
      main: {
        temp: 286.164,
        pressure: 1017.58,
      },
      wind: {
        speed: 3.61,
        deg: 165.001,
      },
    },
  ];
  const wrapper = shallow(<Day today={today} weather={weather} />);
  expect(wrapper).toMatchSnapshot();
});
