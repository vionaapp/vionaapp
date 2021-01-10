require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src`,
				name: 'src'
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,

		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				showSpinner: true,
				trickle: false,
				minimum: 0.4
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'ویونا اپ',
				short_name: 'ویونا',
				start_url: '/',
				background_color: 'teal',
				theme_color: 'teal',
				display: 'standalone',
				icon: 'src/img/vionasquare.png'
			}
		},
		`gatsby-plugin-offline`
	]
};
