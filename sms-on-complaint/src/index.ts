import { defineHook } from '@directus/extensions-sdk';

export default defineHook(({ filter, action }) => {
	filter('items.create', (a, b) => {
		console.log('Creating Item!');
    console.log(Object.entries(b))
	});

	action('items.create', () => {
		console.log('Item created!');
	});
});
