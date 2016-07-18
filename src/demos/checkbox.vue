<template>
  <h1>Checkbox 多选框</h1>
  <h3>形态</h3>
  <div class="ant-card ant-card-bordered">
    <div class="ant-card-body">
      <Check-Box :checked.sync="check" value="xiaoming">小明</Check-Box>
      <Check-Box disabled="true">字符串</Check-Box>
      <Check-Box :disabled='disabled' checked="true">布尔</Check-Box>
    </div>
  </div>
  <h3>选择组合</h3>
  <div class="ant-card ant-card-bordered">
    <div class="ant-card-body">
      <Check-Box-Group :items="items" style="display: inline-block"></Check-Box-Group>
      <X-Button type="primary" @click="submit">submit</X-Button>
    </div>
  </div>
</template>
<script>
  import {CheckBox, CheckBoxGroup, XButton} from '../components'

  window.items = [{text: '小明', value: '1'}, {text: '小红', value: '2'}, {text: '小花', value: '3'}]
  export default {
    components: {
      CheckBox,
      CheckBoxGroup,
      XButton
    },
    events: {
      'on-checked' (checked) {
        console.log([window.items[0]])
      }
    },
    data () {
      return {
        check: true,
        disabled: true,
        items: window.items
      }
    },
    methods: {
      submit () {
        let checks = []
        for (var i = 0; i < window.items.length; i++) {
          if (window.items[i]['checked']) {
            checks.push(window.items[i]['value'])
          }
        }
        alert(checks)
      }
    }
  }
</script>
