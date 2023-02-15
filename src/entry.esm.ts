import _Vue, { PluginFunction } from 'vue';

import * as components from './lib-components';

const install: PluginFunction<any> = function installVuesualy(Vue: typeof _Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

export default install;

export * from './lib-components';
