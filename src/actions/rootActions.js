import axios from 'axios';
import groupWeatherByDay from '../func/groupWeatherByDay';
import { GET_WEATHER, TOOGLE_LOADING, GET_ERROR } from './actionTypes';

export const getWeather = city => (dispatch) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&mode=json&units=metric&appid=7c0c8db74a014dfc4fe839168cd1b37d`,
    )
    .then(response => dispatch({
      type: GET_WEATHER,
      city: response.data.city,
      weather: groupWeatherByDay(response.data.list),
    }))
    .catch(error => dispatch({
      type: GET_ERROR,
      error,
    }));
};

export const toogleLoading = () => ({
  type: TOOGLE_LOADING,
});
