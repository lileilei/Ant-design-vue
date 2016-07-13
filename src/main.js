/**
 * Created by lilei on 2016/7/12.
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import button from './demos/button'

Vue.use(Router)
var router = new Router()
router.map({
  '/': {
    component: button
  }
})

router.start(App, '#app')

