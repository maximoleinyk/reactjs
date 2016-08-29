import settings from './settings';

let settingsReducer = (reducers) => {
  return {
    settings,
    ...reducers
  };
}

export default settingsReducer;
