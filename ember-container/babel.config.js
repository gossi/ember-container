'use strict';

module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    '@embroider/addon-dev/template-colocation-plugin',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties'
  ]
};
