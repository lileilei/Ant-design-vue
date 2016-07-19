<template>
  <figure class="highlight">
    <slot></slot>
  </figure>
</template>
<script>
  export default {
    attached: function () {
      let str = this.$el.textContent
      this.$el.innerHTML = require('markdown').parse(str)
    }
  }
</script>
<style lang="less">
  .highlight {
    border-radius: 6px;
    background: #f7f7f7;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    padding: 1em;
  }
</style>
