<template>
  <button class="ant-btn" :class="classes" :disabled="disabled">
    {{text}}<slot></slot>
  </button>
</template>
<script>
  export default {
    props: {
      type: String,
      disabled: Boolean,
      text: String
    },
    computed: {
      classes () {
        return [
          {
            disabled: this.disabled,
            weui_btn_mini: this.mini
          },
          this.type ? `ant-btn-${this.type}` : ''
        ]
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
