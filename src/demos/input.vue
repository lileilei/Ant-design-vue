<template>
  <div>
    <h1>Input 输入框</h1>
    <h3>尺寸</h3>
    <div id="input_demo" class="ant-card ant-card-bordered">
      <div class="ant-card-body">
        <X-Input placeholder="小输入框" size="sm"></X-Input>
        <X-Input placeholder="基本输入框"></X-Input>
        <X-Input placeholder="大输入框" size="lg"></X-Input>
      </div>
    </div>
    <h3>前置/后置 标签</h3>
    <div class="ant-card ant-card-bordered">
      <div class="ant-card-body">
        <X-Input type="tag" placeholder="基本输入框" width="200px">
          <Input-Tag slot="before">http://</Input-Tag>
          <Input-Tag slot="after">.com</Input-Tag>
        </X-Input>
      </div>
    </div>

    <h3>搜索框</h3>
    <div class="ant-card ant-card-bordered">
      <div class="ant-card-body">
        <Input-Group placeholder="搜索框内容" :value.sync="searchValue" width="300px">
          <X-Button class="ant-search-btn" icon="search" @click="search"></X-Button>
        </Input-Group>
      </div>
    </div>
    <h3>多文本框</h3>
    <div class="ant-card ant-card-bordered">
      <div class="ant-card-body">
        <X-Text-Area></X-Text-Area>
        <X-Text-Area maxrows="5" placeholder="自适应高度" :style="textarea" autosize></X-Text-Area>
      </div>
    </div>
  </div>
</template>
<style>
  #input_demo .ant-input {
    margin: 10px 10px 0 0;
    width: 150px;
  }
</style>
<script>
  import {XInput, InputGroup, XButton, InputTag, XTextArea} from '../components'

  export default {
    components: {
      XInput,
      InputGroup,
      XButton,
      InputTag,
      XTextArea
    },
    data () {
      return {
        searchValue: '',
        textarea: {
          height: '28px',
          marginTop: '15px',
          width: '150px'
        }
      }
    },
    methods: {
      search () {
        alert('search key word:' + this.searchValue)
      }
    }
  }
</script>
