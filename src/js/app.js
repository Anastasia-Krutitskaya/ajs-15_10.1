/* eslint-disable arrow-body-style */
// TODO: write your code here
import GameSavingLoader from './loader';

GameSavingLoader.load().then((saving) => {
  return saving;
}, (error) => {
  return error;
});
