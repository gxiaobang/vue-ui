import Vue from 'vue';
import Component from './main';

/* istanbul ignore next */
Component.install = (Vue) => {
  Vue.component(Component.name, Component);
};

export default Component;
