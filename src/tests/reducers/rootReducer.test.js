import reducer from '../../reducers/rootReducer';

describe('Reducers', () => {
  it('Should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('Should handle TOOGLE_LOADING', () => {
    const toogleLoadingState = {
      loadingWeather: true,
    };
    const toogleLoadingAction = {
      type: 'TOOGLE_LOADING',
    };
    expect(reducer(toogleLoadingState, toogleLoadingAction)).toEqual({
      loadingWeather: false,
    });
  });
});
