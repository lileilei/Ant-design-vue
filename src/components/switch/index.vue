<template>
  <span class="ant-switch" :class="classes" @click="check"><span class="ant-switch-inner">{{ text }}</span></span>
</template>
<script>
  export default {
    props: {
      id: String,
      checked: Boolean,
      txt: String,
      size: String,
      disabled: Boolean
    },
    computed: {
      classes () {
        return [
          {
            'ant-switch-checked': this.checked,
            'ant-switch-disabled': this.disabled
          },
          this.size ? `ant-switch-${this.size === 'sm' && 'small'}` : ''
        ]
      },
      text () {
        if (this.txt) {
          return (this.checked ? this.txt.slice(0, 1) : this.txt.slice(1))
        }
      }
    },
    methods: {
      check () {
        if (!this.disabled) {
          this.checked = !this.checked
          this.$dispatch('switch-event', this)
        }
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
