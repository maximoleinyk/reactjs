import feedItems from './feedItems';

let feedReducer = (reducers) => {
  return {
    feedItems,
    ...reducers
  };
}

export default feedReducer;
