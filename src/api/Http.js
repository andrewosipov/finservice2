class APIError extends Error {}

const Http = {
  defaultHeaders: {
    'Content-Type': 'application/json'
  },

  async get(url, secured = false, dataType = 'json', headers = {}, token = null) {
    const response = await fetch(url, {
      method: 'get',
      headers: Object.assign({}, this.defaultHeaders, headers)
    });
    return this._handleResponse(dataType, response);
  },

  _handleResponse(dataType, response) {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new APIError(`${response.status} ${response.statusText}`);
    }
  },

};

export default Http;
