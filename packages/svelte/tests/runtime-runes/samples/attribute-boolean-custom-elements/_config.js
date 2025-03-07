import { test } from '../../test';

const iamboolean = false;

export default test({
	props: {
		iamboolean: iamboolean
	},

	ssrHtml: `
		<custom-element></custom-element>
	`,

	async test({ assert, target, component }) {
		assert.htmlEqual(
			target.innerHTML,
			`
			<custom-element></custom-element>
			`
		);
	}
});
