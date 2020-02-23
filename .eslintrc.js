module.exports = {
	env: {
		node: true,
		es6: true,
		jest: true
	},
	plugins: ['jest'],
	extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules:{
		'jest/no-disabled-tests': 'error',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		"import/no-extraneous-dependencies": ["warn", { "devDependencies": ["tests/*", "**/*.test.js"] }],
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ['error', { args: 'none' }]
	}
}