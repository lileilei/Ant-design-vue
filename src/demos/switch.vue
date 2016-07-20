<template>
  <div>
    <h1>Switch 开关</h1>
    <div id="switch_demo" class="ant-card ant-card-bordered">
      <div class="ant-card-body">
        <Switch size="sm"></Switch>
        <Switch disabled></Switch>
        <Switch id="dog" txt="开关"></Switch>
        <span style="margin-left: 20px;">{{ status | json }}</span>
      </div>
    </div>
  </div>
</template>
<style>
  #switch_demo .ant-switch:not(:first-child) {
    margin-left: 30px;
  }
</style>
<script>
  import {Switch} from '../components'

  export default {
    components: {
      Switch
    },
    events: {
      'switch-event': function (obj) {
        this.status = {
          id: obj.id,
          checked: obj.checked
        }
      }
    },
    data () {
      return {
        status: {id: '', checked: false}
      }
    }
  }
</script>
