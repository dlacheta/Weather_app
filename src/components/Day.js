import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Day = ({ today, weather }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">
        {today
          ? `Today (${moment(weather[0].dt_txt).format('DD - MMM - YYYY')})`
          : `${moment(weather[0].dt_txt).format('dddd')} (${moment(weather[0].dt_txt).format(
            'DD - MMM - YYYY',
          )})`}
      </h5>
      <ul className="list-group">
        {weather.map(time => (
          <li className="d-flex list-group-item align-middle" key={time.dt}>
            <div className="time">{moment(time.dt_txt).format('HH:mm')}</div>
            <div className="icon">
              <img
                src={`http://openweathermap.org/img/w/${time.weather[0].icon}.png`}
                alt={time.weather[0].description}
              />
            </div>
            <div className="temp">
              {time.main.temp}
              <sup>o</sup>
C
            </div>
            <div className="hpa">{`${time.main.pressure} hPa`}</div>
            <div className="wind">{time.wind.speed}</div>
            <div className="wind-arrow">
              <i className="material-icons" style={{ transform: `rotate(${time.wind.deg}deg)` }}>
                arrow_right_alt
              </i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Day.propTypes = {
  today: PropTypes.bool.isRequired,
  weather: PropTypes.arrayOf(
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
  ).isRequired,
};

export default Day;
