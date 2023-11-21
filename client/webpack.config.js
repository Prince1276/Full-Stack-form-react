const webpack = require('webpack');

module.exports = {
  // Your existing Webpack configuration

  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
    },
  },
  plugins: [
    // Add the following plugin to provide a fallback for the 'http' module
    new webpack.ProvidePlugin({
      process: 'process/browser',
      http: 'stream-http',
    }),
  ],
};
