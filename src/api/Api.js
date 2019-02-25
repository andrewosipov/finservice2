import Http from './Http';
const API_URL = 'https://demo6245587.mockable.io';

export const Structure = {
  async fetch(data) {
    return await Http.get(API_URL + '/get', data, false, 'headers')
  }
};
