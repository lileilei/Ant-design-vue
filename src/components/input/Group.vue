<template>
  <span class="ant-input-wrapper ant-input-group">
    <span class="ant-input-group-addon">Http://</span>
    <input type="text" class="ant-input" placeholder="{{ placeholder }}" v-model="value"
           @blur="blur">
    <span class="ant-input-group-addon">.com</span></span>
</template>
<script>

  export default {
    props: {
      placeholder: String,
      value: {
        type: String,
        default: '',
        twoWay: true
      },
      name: String
    },
    methods: {
      blur () {
        console.log(this.value)
      }
    },
    computed: {
      classes () {
        return [
          {
            disabled: this.disabled,
            'ant-btn-loading': this.loading
          },
          this.type ? `ant-btn-${this.type}` : '',
          this.shape ? `ant-btn-${this.shape}` : '',
          this.size ? `ant-btn-${this.size}` : ''
        ]
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
