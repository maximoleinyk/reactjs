import feed from './feed';

let feedReducer = (reducers) => {
  return {
    feed,
    ...reducers
  };
}

export default feedReducer;
