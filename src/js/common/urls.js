const urls = {
  feed: '/api/feed',
  feedItem: '/api/feed/:id'
};

export default (() => {
  let urlKeys = Object.keys(urls);
  let result = {};

  urlKeys.forEach((key) => {
    let obtainString = (object = {}) => {
      let string = urls[key];

      Object.keys(object).forEach((param) => {
        string = string.replace(':' + param, object[param]);
      });

      return string;
    };

    result[key] = obtainString;
    result[key].toString = () => {
      return obtainString();
    };
  });

  return result;
})();
