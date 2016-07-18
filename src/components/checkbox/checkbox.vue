<template>
  <label class="ant-checkbox-wrapper">
    <span class="ant-checkbox" :disabled="disabled" :class="classes" @click="select">
      <span class="ant-checkbox-inner"></span>
      <input type="checkbox" class="ant-checkbox-input">
    </span><span><slot></slot></span>
  </label>
</template>
<script>
  export default {
    props: {
      checked: {
        type: [String, Boolean],
        default: false
      },
      disabled: [String, Boolean],
      value: String
    },
    computed: {
      classes () {
        return [
          {
            'ant-checkbox-disabled': this.disabled === 'true' || this.disabled === true,
            'ant-checkbox-checked': this.checked === 'true' || this.checked === true
          }
        ]
      }
    },
    methods: {
      select: function () {
        if (this.disabled !== 'true' && this.disabled !== true) {
          this.checked = !this.checked
        }
      }
    },
    watch: {
      checked (newVal) {
        this.$dispatch('on-checked', newVal)
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
