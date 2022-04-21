import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

// this file designates how the server will serve up different routes to the
// browser.
//
// this is responsible for the # in the URL, has to do with forward/back
// navigation without reloading the page. See:
// https://stackoverflow.com/questions/34623833/vue-js-how-to-remove-hashbang-from-url

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
