import path from 'path';
const { createVuePlugin } = require('vite-plugin-vue2');
import ViteComponents from 'vite-plugin-components';

module.exports = {
  base:'./',
  plugins: [createVuePlugin(), ViteComponents()],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    },
  },
  server: {
    port: 8083,
  },
};
