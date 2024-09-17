/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.(mp4|webm|ogg)$/, // Add other video formats if needed
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'static/media/', // You can change this to your preferred path
              publicPath: '/_next/static/media/',
            },
          },
        });
        return config;
      },
};

export default nextConfig;
