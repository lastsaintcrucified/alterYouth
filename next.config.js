const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
				reactStrictMode: true,
				swcMinify: true,
				webpack(config) {
								config.module.rules.push({
												test: /\.svg$/,
												use: ["@svgr/webpack"],
								});

								return config;
				},
};

module.exports = withNextVideo(nextConfig);
