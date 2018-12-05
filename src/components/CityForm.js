import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWeather, toogleLoading } from '../actions/rootActions';

export const CityForm = ({ toogleLoadingDispatch, getWeatherDispatch }) => {
  const submitForm = (event) => {
    event.preventDefault();
    if (event.target.city_name.value) {
      toogleLoadingDispatch();
      getWeatherDispatch(event.target.city_name.value);
    }
  };
  return (
    <form onSubmit={submitForm}>
      <div className="input-group mb-3">
        <input name="city_name" type="text" className="form-control" placeholder="City" />
        <div className="input-group-append">
          <button className="btn btn-outline-dark" type="submit" id="button-addon2">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

CityForm.propTypes = {
  toogleLoadingDispatch: PropTypes.func.isRequired,
  getWeatherDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getWeatherDispatch: city => dispatch(getWeather(city)),
  toogleLoadingDispatch: () => dispatch(toogleLoading()),
});

export default connect(
  null,
  mapDispatchToProps,
)(CityForm);
