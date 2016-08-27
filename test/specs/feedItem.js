import {ADD_FEED_ITEM, UPDATE_FEED_ITEM} from 'app/feed/constants';
import feedItem from 'app/feed/reducers/feedItem';

describe('Reducers', () => {
	describe('FeedItem', () => {

		it('should return new object with id attribute set', () => {
			const rest = {
				value: 'test'
			};
			const payload = {
				type: ADD_FEED_ITEM,
				...rest
			};
			const result = feedItem(undefined, payload);

			assert.equal(result.value, rest.value, 'Create object with different properties');
			assert.isTrue('id' in result, 'Does not contain an "id" propery');
		});

		it('should return new object with updated state', () => {
			const rest = {
				id: 123,
				value: 'test'
			};
			const payload = {
				type: UPDATE_FEED_ITEM,
				...rest
			};
			const result = feedItem(undefined, payload);

			assert.equal(result.value, rest.value, 'Create object with different properties');
			assert.isTrue('id' in result, 'Does not contain an "id" propery');
		});
	});
});
