// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

const router =new VueRouter(
  {
    routes:Routes,
    mode:"history"//防止#出现
  }
)

Vue.directive('titlecolor',{
  bind(el,binding,vnode){
    el.style.color="red"
  }
})

Vue.filter("to-uppercase",function(value){
return value.toUpperCase();
}
)

Vue.filter("cut1",function(value){
    return value.slice(0,30)+"..."
})

Vue.filter("cut2",function(value){
   return value.slice(0,50)+"..."
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
