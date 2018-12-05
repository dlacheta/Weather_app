import * as actions from '../../actions/rootActions';

describe('Actions', () => {
  it('Should toogle Loading', () => {
    const expectedAction = {
      type: 'TOOGLE_LOADING',
    };
    expect(actions.toogleLoading()).toEqual(expectedAction);
  });
});
