/* global fetch */
const request = (url, requestType, method) => {
  return {
    entity(entityName) {
      return {
        send: (data = {}) => {
          return {
            requestType,
            entityName,
            http() {
              let options = {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method
              };

              if (method === 'POST' || method === 'PUT') {
                options.body = JSON.stringify(data);
              }

              return fetch(url, options);
            },
            payload: data
          };
        }
      }
    }
  };
};

export default {
  get(url) {
    return request(url, 'REQUEST', 'GET');
  },
  post(url) {
    return request(url, 'CREATE', 'POST');
  },
  put(url) {
    return request(url, 'UPDATE', 'PUT');
  },
  del(url) {
    return request(url, 'DELETE', 'DELETE');
  }
};
