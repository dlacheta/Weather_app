import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Day from './Day';
import City from './City';
import CityForm from './CityForm';
import capitalizeFirstLetter from '../func/capitalizeFirstLetter';

export const Main = ({
  city, weather, loadingWeather, error,
}) => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Weather app</h1>
        <div className="lead">
          Please enter a name of the city to get 5 day forecast:
          <CityForm />
        </div>
        {city.name ? <City city={city} /> : capitalizeFirstLetter(error)}
      </div>
    </div>
    <div className="d-flex flex-row bd-highlight mb-3 flex-wrap">
      {city.name
        ? Object.keys(weather).map((day, index) => (
          <Day key={day} today={index === 0} weather={weather[day]} />
        ))
        : null}
    </div>
    {loadingWeather ? (
      <div className="loading-container">
        <div className="loading" />
      </div>
    ) : null}
  </div>
);

Main.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    population: PropTypes.number,
    coord: PropTypes.shape({
      lat: PropTypes.number,
      lon: PropTypes.number,
    }),
  }),
  weather: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        dt: PropTypes.number,
        dt_txt: PropTypes.string,
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            icon: PropTypes.string,
            description: PropTypes.string,
          }),
        ),
        main: PropTypes.shape({
          temp: PropTypes.number,
          pressure: PropTypes.number,
        }),
        wind: PropTypes.shape({
          speed: PropTypes.number,
          deg: PropTypes.number,
        }),
      }),
    ),
  ),
  loadingWeather: PropTypes.bool,
  error: PropTypes.string,
};

Main.defaultProps = {
  city: {
    name: '',
    country: '',
    population: 0,
    coord: {
      lat: 0,
      lon: 0,
    },
  },
  weather: [
    [
      {
        dt: 0,
        dt_txt: '',
        weather: [
          {
            icon: '',
            description: '',
          },
        ],
        main: {
          temp: 0,
          pressure: 0,
        },
        wind: {
          speed: 0,
          deg: 0,
        },
      },
    ],
  ],
  loadingWeather: false,
  error: '',
};

const mapStateToProps = state => ({
  city: state.city,
  weather: state.weather,
  loadingWeather: state.loadingWeather,
  error: state.error,
});

export default connect(mapStateToProps)(Main);
