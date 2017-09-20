import Vue from 'vue'
import Router from 'vue-router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Home from '@/components/home'

Vue.use(Router)
Vue.use(VueYouTubeEmbed)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
