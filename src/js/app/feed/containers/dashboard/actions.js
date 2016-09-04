import {http, urls} from 'common';

let requestFeed = () => {
  return http.get(urls.feed).entity('feed').send();
};

let create = (text) => {
  return http.post(urls.feed).entity('feed_item').send({
    text
  });
};

let update = (data) => {
  const url = urls.feedItem({
    id: data.id
  });

  return http.put(url).entity('feed_item').send(data);
};

let remove = (id) => {
  const url = urls.feedItem({
    id
  });

  return http.del(url).entity('feed_item').send({
    id
  });
};

export {create, remove, update, requestFeed};
