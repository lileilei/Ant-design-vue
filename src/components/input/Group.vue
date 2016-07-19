<template>
  <span class="ant-input-group ant-search-input" :style="inputstyle">
    <span class="ant-input-wrapper"><input type="text" placeholder="input search text" class="ant-input"></span>
    <X-Input :value.sync="value"></X-Input>
    <div class="ant-input-group-wrap"><slot></slot></div>
  </span>
</template>
<script>
  import XInput from './input.vue'
  export default {
    components: {
      XInput
    },
    props: {
      placeholder: String,
      value: {
        type: String,
        default: '',
        twoWay: true
      },
      name: String,
      width:{
        type:String,
        default:'inherit'
      }
    },
    methods: {
      blur () {
        console.log(this.value)
      }
    },
    computed: {
      inputstyle () {
        return {
          width:this.width
        }
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
