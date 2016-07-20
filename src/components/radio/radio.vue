<template>
  <label class="ant-radio-wrapper" :class="clazz"><span class="ant-radio" :class="classes" @click="check"><span
    class="ant-radio-inner"></span><input
    type="radio" class="ant-radio-input" :checked="checked" :name="name" :value="value"></span><span><slot></slot></span></label>
</template>
<script>
  export default {
    props: {
      checked: Boolean,
      disabled: Boolean,
      value: String,
      isgroup: Boolean,
      name: String,
      index: Number
    },
    computed: {
      classes () {
        return [
          {
            'ant-radio-checked': this.checked,
            'ant-radio-disabled': this.disabled
          }
        ]
      },
      clazz () {
        return [
          {
            'ant-radio-wrapper-disabled': this.disabled
          }
        ]
      }
    },
    methods: {
      check: function () {
        if (!this.disabled) {
          if (!this.isgroup) {
            this.checked = !this.checked
          } else if (!this.checked) {
            this.checked = true
            this.$dispatch('group-event', this.index)
          }
        }
      }
    },
    watch: {
      checked () {
        this.$dispatch('on-checked', this)
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
