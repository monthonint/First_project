import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Port from '@/components/Port'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-file',
      component: Home
    },
    {
      path: '/about',
      name: 'about-file',
      component: About
    },
    {
      path: '/portfolio',
      name: 'port-file',
      component: Port
    },
    {
      path: '/contact',
      name: 'contact-file',
      component: Contact
    }
  ]
})
