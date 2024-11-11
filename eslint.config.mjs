// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	// Your custom configs here
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.vue', '**/*.js'],
		rules: {
			'no-console': 'error',
			'quotes': ['error', 'single'],
			'semi': ['error', 'always'],
			'indent': ['error', 'tab'],
		},
	},
);
