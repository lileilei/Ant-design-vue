<template>
  <span class="ant-input-wrapper"><input type="text" class="ant-input" placeholder="{{ placeholder }}" v-model="value" @blur="blur" ></span>
</template>
<script>

  export default {
    props: {
      placeholder: String,
      value: {
        type: String,
        default: '',
        twoWay: true
      },
      name: String
    },
    methods: {
      blur () {
        console.log(this.value)
      }
    },
    computed: {
      classes () {
        return [

        ]
      }
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
