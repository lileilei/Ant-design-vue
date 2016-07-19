<template>
  <span class="ant-input-wrapper" :class="clazz" :style="stylus">
    <slot name="before"></slot>
    <input type="text"  class="ant-input" :class="classes"  :name="name" placeholder="{{ placeholder }}" v-model="value" @blur="blur">
    <slot name="after"></slot>
  </span>
</template>
<script>

  export default {
    props: {
      type: String,
      placeholder: String,
      value: {
        type: String,
        default: '',
        twoWay: true
      },
      name: String,
      size: String,
      width:{
        type:String,
        default:'inherit'
      }
    },
    methods: {
      blur () {
        console.log(this.value)
      }
    },
    computed: {
      classes () {
        return [
          this.size ? `ant-input-${this.size}` : ''
        ]
      },
      clazz () {
        return [
          {
            'ant-input-group': this.type === 'tag'
          }
        ]
      },
      stylus () {
        return {
          width:this.width
        }
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
