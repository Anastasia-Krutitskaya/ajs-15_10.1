/* eslint-disable arrow-body-style */
import GameSavingLoader from '../loader';

test('test', () => {
  return GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual({
      created: 1546300800,
      id: 9,
      userInfo: {
        id: 1,
        level: 10,
        name: 'Hitman',
        points: 2000,
      },
    });
  }, (error) => {
    return error;
  });
});
