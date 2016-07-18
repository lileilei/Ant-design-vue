/**
 * Created by lilei on 2016/7/12.
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import button from './demos/button'
import icon from './demos/icon'
import checkbox from './demos/checkbox'
import input from './demos/input'

Vue.use(Router)
var router = new Router()
router.map({
  '/': {
    component: button
  },
  '/icon': {
    component: icon
  },
  '/checkbox': {
    component: checkbox
  },
  '/input': {
    component: input
  }
})

router.start(App, '#app')

