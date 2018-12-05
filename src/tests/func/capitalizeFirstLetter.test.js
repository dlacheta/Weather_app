import capitalizeFirstLetter from '../../func/capitalizeFirstLetter';

describe('capitalizeFirstLetter function works correctly', () => {
  it('Should received Weather', () => {
    expect(capitalizeFirstLetter('weather')).toEqual('Weather');
  });
  it('Should received London', () => {
    expect(capitalizeFirstLetter('london')).toEqual('London');
  });
});
