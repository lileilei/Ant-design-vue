<template>
  <pre class="language-{{type}}"><code v-el:coder class="language-{{type}}"><slot></slot></code></pre>
</template>
<script>
  import Prism from 'prismjs'
  export default {
    props: {
      type: {
        default: 'html',
        type: String
      },
      for: String
    },
    attached: function () {
      let code = document.getElementById(this.for)
      this.$els.coder.innerHTML = Prism.highlight(code.innerHTML.replace(/[\r\n]/, ''), Prism.languages[this.type])
    }
  }
</script>
<style lang="less">
  @import './style/prism.css';
</style>
