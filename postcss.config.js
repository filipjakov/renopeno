module.exports = {
  modules: false,
  plugins: {
		'postcss-preset-env': {
			stage: 3,
			autoprefixer: {
				grid: true,
				flexbox: false,
				supports: false,
      },
      features: {
        'nesting-rules': true,
        'system-ui-font-family': true
      }
    },
    'postcss-font-magician': {
			variants: {
        'Work Sans': {
					400: ['woff'],
					600: ['woff'],
					700: ['woff'], // same as "bold"
				},
			},
			display: 'swap',
			foundries: ['google'],
			formats: 'woff',
			protocol: 'https:'
		},
  }
}