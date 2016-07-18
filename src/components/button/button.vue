<template>
  <button class="ant-btn" :class="classes" :disabled="disabled">
    <Icon :type="icon"></Icon>
    {{text}}
    <slot></slot>
  </button>
</template>
<script>
  import {Icon} from '../icon'

  export default {
    components: {
      Icon
    },
    props: {
      type: String,
      disabled: Boolean,
      text: String,
      icon: String,
      loading: Boolean,
      shape: String,
      size: String
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
