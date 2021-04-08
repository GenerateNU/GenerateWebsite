const debug = process.env.NODE_ENV !== 'production'
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const env = {
  CANONICAL_URL: 'www.insertGenerateURLHERE.com',
};

module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
  }],
  {
    env,
  },
]);