<template>
  <div class="ant-radio-group">
    <Radio isgroup v-for="(index,item) in items" :index="index" :name="name" :disabled.sync="item.disabled"
           :checked.sync="item.checked">
      {{ item.text }}
    </Radio>
  </div>
</template>
<script>
  import Radio from './radio.vue'
  export default {
    components: {
      Radio
    },
    props: {
      items: Array,
      name: {
        type: String,
        default: new Date().valueOf().toString()
      }
    },
    computed: {
      classes () {
        return [
          {
            'ant-radio-checked': this.checked,
            'ant-radio-disabled': this.disabled
          }
        ]
      }
    },
    events: {
      'group-event': function (index) {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].checked === true && index !== i) {
            this.items[i].checked = false
            break
          }
        }
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
