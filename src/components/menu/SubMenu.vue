<template lang="html">

  <li class="ant-menu-submenu-{{mode}} ant-menu-submenu" :class="{'ant-menu-submenu-open': open}">
    <div class="ant-menu-submenu-title" @click="open=!open" transition="badge">
      <span><span>{{title}}</span></span>
    </div>
    <ul class="ant-menu ant-menu-inline ant-menu-sub">
      <slot></slot>
    </ul>
  </li>

</template>

<script>
  export default {
    props: {
      title: String,
      mode: String
    }
  }
</script>

<style lang="less">
  @import './style/index.less';

  .ant-menu-inline {
    overflow: hidden;
  }
</style>
