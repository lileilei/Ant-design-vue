<template>
  <label class="ant-checkbox-wrapper">
    <span class="ant-checkbox"  :class="classes" @click="select">
      <span class="ant-checkbox-inner"></span>
      <input type="checkbox" class="ant-checkbox-input" :checked="checked" :value="value" :name="name">
    </span><span><slot></slot></span>
  </label>
</template>
<script>
  export default {
    props: {
      checked: Boolean,
      disabled: Boolean,
      value: String,
      name: String
    },
    computed: {
      classes () {
        return [
          {
            'ant-checkbox-disabled': this.disabled,
            'ant-checkbox-checked': this.checked
          }
        ]
      }
    },
    methods: {
      select: function () {
        if (!this.disabled) {
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
