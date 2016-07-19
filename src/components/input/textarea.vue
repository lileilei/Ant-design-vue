<template>
  <span class="ant-input-wrapper">
    <textarea placeholder="{{ placeholder }}" class="ant-input"
              :style="style"
              :name="name"
              :minrows="minRows"
              :maxrows="maxRows"
              @input="input"
              v-model="value"
              v-el:textarea></textarea>
  </span>
</template>
<script>

  export default {
    ready () {
      if (this.autosize) {
        var styles = window.getComputedStyle(this.$els.textarea)
        var boxSizing = styles.getPropertyValue('box-sizing') || styles.getPropertyValue('-moz-box-sizing') || styles.getPropertyValue('-webkit-box-sizing')
        var paddingSize = parseFloat(styles.getPropertyValue('padding-bottom')) + parseFloat(styles.getPropertyValue('padding-top'))
        var borderSize = parseFloat(styles.getPropertyValue('border-bottom-width')) + parseFloat(styles.getPropertyValue('border-top-width'))
        this.nodeInfo = {
          paddingSize: paddingSize,
          borderSize: borderSize,
          boxSizing: boxSizing,
          minHeight: Number(this.minrows) * 18,
          maxHeight: (Number(this.maxrows) + 1) * 18,
          currHeight: this.minHeight
        }
        this.style.overflow = 'hidden'
        this.style.height = this.nodeInfo.minHeight
      }
    },
    props: {
      placeholder: String,
      value: {
        type: String,
        default: '',
        twoWay: true
      },
      name: String,
      style: Object,
      autosize: Boolean,
      nodeInfo: Object,
      minrows: {
        type: [String, Number],
        default: 1
      },
      maxrows: [String, Number]
    },
    methods: {
      blur () {
        console.log(this.value)
      },
      input () {
        if (this.autosize) {
          var scrollHeight = this.$els.textarea.scrollHeight
          if (!!this.nodeInfo.maxHeight && scrollHeight > this.nodeInfo.maxHeight) {
            this.$els.textarea.style.overflowY = 'auto'
            return
          }
          this.$els.textarea.style.overflowY = 'hidden'
          this.$els.textarea.style.height = this.nodeInfo.minHeight + this.nodeInfo.borderSize + this.nodeInfo.paddingSize + 'px'
          if (this.nodeInfo.boxSizing === 'border-box') {
            // border-box: add border, since height = content + padding + border
            scrollHeight = this.$els.textarea.scrollHeight + this.nodeInfo.borderSize
          } else if (this.nodeInfo.boxSizing === 'content-box') {
            // remove padding, since height = content
            scrollHeight = this.$els.textarea.scrollHeight - this.nodeInfo.paddingSize
          }
          this.$els.textarea.style.height = scrollHeight + 'px'
        }
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
