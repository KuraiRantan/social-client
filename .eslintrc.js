/* eslint-disable no-undef */
module.exports = {
	root: true,
	env: {
		browser: true,
	},
	extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'prettier'],
	parserOptions: {
		parser: '@babel/eslint-parser',
		sourceType: 'module',
	},
	rules: {
		// "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		// "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		'no-unused-vars': 'warn',
		'vue/multi-word-component-names': 'off',
	},
};
