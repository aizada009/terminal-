// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    selected: [],
    burger: [], 
    burgertypes: [ {id:1, title:'БигМак',     price:700,  image:'../static/img/burger.jpg' },
    {id:2, title:'Чизбургер',  price:800,  image:'../static/img/burger2.png'},
    {id:3, title:'РоялДеЛюкс', price:1200, image:'../static/img/burger.jpg' },
    {id:4, title:'Стандарт',   price:600,  image:'../static/img/burger2.png'},

]
  }
})
