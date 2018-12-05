import React from 'react';
import PropTypes from 'prop-types';

const City = ({
  city: {
    name,
    country,
    population,
    coord: { lat, lon },
  },
}) => (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">{`${name}, ${country}`}</h4>

      <div className="d-flex justify-content-between">
        <p>{`Population: ${population}`}</p>
        <p>{`Coordinates: Latitute: ${lat} Longitude: ${lon}`}</p>
      </div>
    </div>
  </div>
);

City.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    population: PropTypes.number,
    coord: PropTypes.shape({
      lat: PropTypes.number,
      lon: PropTypes.number,
    }),
  }).isRequired,
};

export default City;
