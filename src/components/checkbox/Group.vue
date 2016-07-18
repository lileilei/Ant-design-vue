<template>
  <div class="ant-checkbox-group">
    <Check-Box v-for="item in items" :checked.sync='item.checked'>{{ item.text }}</Check-Box>
  </div>
</template>
<script>
  import CheckBox from './checkbox'

  export default {
    props:{
      items: Array
    },
    components:{
      CheckBox
    }
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
