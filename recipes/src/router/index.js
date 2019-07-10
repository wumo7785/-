import Vue from 'vue'
import Router from 'vue-router'
import recipes from '@/components/recipes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recipes',
      component: recipes
    }
  ]
})
