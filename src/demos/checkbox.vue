<template>
  <h1>Checkbox 多选框</h1>
  <h3>形态</h3>
  <div class="ant-card ant-card-bordered">
    <div class="ant-card-body">
      <Check-Box :checked.sync="check" value="xiaoming">小明</Check-Box>
      <Check-Box disabled>字符串</Check-Box>
      <Check-Box disabled checked>布尔</Check-Box>
    </div>
  </div>
  <h3>选择组合</h3>
  <div class="ant-card ant-card-bordered">
    <div class="ant-card-body">
      <Check-Box-Group :items="items" style="display: inline-block"></Check-Box-Group>
      <X-Button type="primary" @click="submit">submit</X-Button>
      <p style="margin-top: 10px;">{{ items | json }}</p>
    </div>
  </div>
</template>
<script>
  import {CheckBox, CheckBoxGroup, XButton} from '../components'

  export default {
    components: {
      CheckBox,
      CheckBoxGroup,
      XButton
    },
    events: {
      'on-checked' (checked) {
        console.log(checked)
      }
    },
    data () {
      return {
        check: true,
        items: [{text: '小强', value: '1'}, {text: '小红', value: '2'}, {
          text: '小花',
          value: '3',
          disabled: true,
          checked: true
        }]
      }
    },
    methods: {
      submit () {
        let checks = []
        for (var i = 0; i < this.items.length; i++) {
          if (this.items[i]['checked']) {
            checks.push(this.items[i]['value'])
          }
        }
        alert(checks)
      }
    }
  }
</script>
