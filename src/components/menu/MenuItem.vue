<template lang="html">
  <li class="ant-menu-item" :class="classes">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        return [
          {
            'ant-menu-item-disabled': this.disabled
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
