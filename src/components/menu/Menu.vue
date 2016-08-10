<template lang="html">
  <ul class="ant-menu ant-menu-{{mode}} ant-menu-{{theme}} ant-menu-root">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    props: {
      mode: {
        type: String,
        default: 'horizontal'
      },
      theme: {
        type: String,
        default: 'light'
      },
      items: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="less">
  @import './style/index.less';
</style>
