import Vue, { VNode } from 'vue';
import Dev from './serve.vue';
import Vuesualy from '../src/entry.esm';
Vue.use(Vuesualy);

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
