<template>
  <span class="ant-switch" :class="classes" @click="check">
    <span  class="ant-switch-inner">{{ str }}
          <slot v-if="checked" name="open"></slot>
          <slot v-if="!checked" name="close"></slot>
    </span>
  </span>
</template>
<script>
  export default {
    props: {
      id: String,
      checked: Boolean,
      text: String,
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
      str () {
        if (this.text) {
          return (this.checked ? this.text.slice(0, 1) : this.text.slice(1))
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
