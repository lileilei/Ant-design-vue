/**
 * Created by lilei on 2016/7/12.
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import button from './demos/button'
import checkbox from './demos/checkbox'
import input from './demos/input'
import radio from './demos/radio'
import Switch from './demos/switch'
import select from './demos/select'

Vue.use(Router)
var router = new Router()
router.map({
  '/': {
    component: button
  },
  '/button': {
    component: button
  },
  '/icon': {
    component: function (resolve) {
      require(['./demos/icon.vue'], resolve)
    }
  },
  '/checkbox': {
    component: checkbox
  },
  '/input': {
    component: input
  },
  '/radio': {
    component: radio
  },
  '/switch': {
    component: Switch
  },
  '/select': {
    component: select
  },
  '/layout': {
    component: function (resolve) {
      require(['./demos/layout.vue'], resolve)
    }
  },
  '/menu': {
    component: function (resolve) {
      require(['./demos/menu.vue'], resolve)
    }
  }
})
router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
})
router.start(App, '#app')

