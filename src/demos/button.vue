<template>
  <h1>按钮</h1>
  <div class="ant-card ant-card-bordered">
    <div class="ant-card-body">
      <X-Button type="primary" @click="disable = !disable">primary</X-Button>
      <X-Button :text="text" :disabled="disable">fuck</X-Button>
      <X-Button @click="disable = !disable">切换</X-Button>
    </div>
  </div>
</template>
<script>
  import { XButton } from '../components/button'

  export default {
    components: {
      XButton
    },
    methods: {
      change () {
        console.log(this.disable)
      }
    },
    data () {
      return {
        text:'click me!',
        disable: true
      }
    }
  }
</script>

