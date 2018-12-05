import { GET_WEATHER, TOOGLE_LOADING, GET_ERROR } from '../actions/actionTypes';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return Object.assign({}, state, {
        city: action.city,
        weather: action.weather,
        loadingWeather: false,
      });
    case TOOGLE_LOADING:
      return Object.assign({}, state, {
        loadingWeather: !state.loadingWeather,
      });
    case GET_ERROR:
      return Object.assign({}, state, {
        loadingWeather: !state.loadingWeather,
        error: action.error.response.data.message,
        city: {},
      });
    default:
      return state;
  }
};

export default rootReducer;
