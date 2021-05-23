/* eslint-disable arrow-body-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable prefer-arrow-callback */

import read from './reader';
import json from './parser';

export class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((value) => {
        const valueParsed = JSON.parse(value);
        const obj = new GameSaving(valueParsed.id, valueParsed.created, valueParsed.userInfo);
        return obj;
      })
      .catch((err) => err);
  }
}
