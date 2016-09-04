export default ({dispatch}) => {
  return next => action => {
    const { requestType, entityName, http, payload = {} } = action;

    if (!entityName) {
      return next(action);
    }

    dispatch({
      type: `${requestType}_${entityName.toUpperCase()}`,
      data: payload
    });

    return http()
      .then((response) => {
        if (response.status === '204' && response.statusText === 'No Content') {
          return response.text();
        }

        return response.json();
      })
      .then((response) => {
        dispatch({
          type: `${requestType}_${entityName.toUpperCase()}_SUCCESS`,
          response
        });
      })
      .catch(response => {
        dispatch({
          type: `${requestType}_${entityName.toUpperCase()}_ERROR`,
          response
        });
      });
  };
};
