<template>
  <h1>按钮</h1>
  <h3>按钮类型</h3>
  <div class="ant-card ant-card-bordered">
    <div class="ant-card-body">
      <x-button>Default</x-button>
      <x-button type="primary">Primary</x-button>
      <X-Button type="ghost">Default</X-Button>
      <X-Button type="dashed">Dashed</X-Button>
      <X-Button type="primary" icon="search" shape="circle"></X-Button>
      <X-Button type="primary" icon="search">icon</X-Button>

      <X-Button :text="text"></X-Button>

      <X-Button :disabled="disable">不可点击</X-Button>
      <X-Button type="primary" :icon="search" :loading="load" @click="find">点击加载</X-Button>
    </div>
  </div>
  <h3>按钮大小</h3>
  <div class="ant-card ant-card-bordered">
    <div class="ant-card-body">
      <X-Button size="lg">Large</X-Button>
      <X-Button>Default</X-Button>
      <X-Button size="sm">Smail</X-Button>
    </div>
  </div>
  <h3>按钮组</h3>
  <div class="ant-card ant-card-bordered">
    <div class="ant-card-body">
      <Button-Group>
        <X-Button>左边</X-Button>
        <X-Button>中间</X-Button>
        <X-Button>右边</X-Button>
      </Button-Group>
    </div>
  </div>
</template>
<script>
  import {XButton, ButtonGroup} from '../components'
  export default {
    components: {
      XButton,
      ButtonGroup
    },
    methods: {
      find () {
        var that = this
        this.load = true
        this.search = 'loading'
        setTimeout(function () {
          that.load = false
          that.search = 'search'
        }, 1000)
        console.log(this.disable)
      }
    },
    data () {
      return {
        text: '数据绑定button',
        disable: true,
        load: false,
        search: 'search'
      }
    }
  }
</script>

