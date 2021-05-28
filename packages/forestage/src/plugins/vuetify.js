import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';
import { preset } from 'vue-cli-plugin-vuetify-preset-crane/preset'

Vue.use(Vuetify);

export default new Vuetify({
  preset,
  theme: {
    themes: {
      light: {
        primary: '#007850',
      },
    },
  },
});
