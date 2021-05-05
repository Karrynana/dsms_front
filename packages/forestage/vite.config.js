import path from 'path';
const { createVuePlugin } = require('vite-plugin-vue2');
import ViteComponents from 'vite-plugin-components';

module.exports = {
  plugins: [
    createVuePlugin(),
    ViteComponents({
      customComponentResolvers: [
        (name) => {
          // where `name` is always CapitalCase
          if (name.startsWith('V'))
            return { importName: name, path: 'vuetify/lib' };
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    },
  },
  server: {
    port: 8082,
  },
};
