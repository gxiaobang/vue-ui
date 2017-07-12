import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import components from '@/components/vis-ui';
import router from '@/router';

Vue.use(Element)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue;

let vm = new Vue({
  el: '#app',
  router,
  data() {
    return {
      view: null
    }
  },
  mounted() {
    // console.log('ready')

    // 主页
    if (window.location.pathname == '/login') {
      import('@/views/login')
        .then((view) => {
          // console.log(view)
          this.view = view;
        })
    }
    else {
      import('@/views/home')
        .then((view) => {
          // console.log(view)
          this.view = view;
        })
    }
  }
})
