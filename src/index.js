import vuePureSlider from './vue-pure-slider.vue';

function install(Vue) {
  Vue.component('vuePureSlider', vuePureSlider);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default vuePureSlider;
