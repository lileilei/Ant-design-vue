<template>
  <div>
    <h1>Radio 单选框</h1>
    <h3>单个单选框</h3>
    <div id="radio_demo" class="ant-card ant-card-bordered">
      <div class="ant-card-body">
        <Radio :checked.sync="check" value="1">单选框</Radio>
        <span> {{ check }} </span>
        <Radio disabled checked>不可点击</Radio>
      </div>
    </div>
    <h3>单选框 (组合)</h3>
    <div class="ant-card ant-card-bordered">
      <div class="ant-card-body">
        <Radio-Group :items="items"></Radio-Group>
        <p style="margin-top:10px;">{{ items | json}}</p>
      </div>
    </div>
  </div>
</template>
<style>
  #radio_demo .ant-radio-wrapper:not(:first-child) {
    margin-left: 50px;
  }
</style>
<script>
  import {Radio, RadioGroup} from '../components'

  export default {
    components: {
      Radio,
      RadioGroup
    },
    data () {
      return {
        check: false,
        items: [{text: '小强'}, {text: '旺财'}]
      }
    }
  }
</script>
