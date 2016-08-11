<template>
  <div>
    <h1>Select 选择器</h1>
    <p>类似 Select2 的选择器。</p>
    <h2>何时使用</h2>
    <p>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</p>
    <X-Code for="code1"></X-Code>
    <h2>代码演示</h2>
    <row>
      <X-Col span="12">
        <X-Box>
          <X-Select placeholder="请选择人员" style="width: 120px;" :options="options" :value.sync="value"></X-Select>
          <X-Button @click="submit">提交</X-Button>
          <X-Select disabled style="width: 120px;" value="1">lady</X-Select>
          <span slot="tit">基本使用</span>
          <div slot="desc">基本使用</div>
          <p slot="code">
            <X-Code style="background-color: #FFFFFF" for="code2"></X-Code>
          </p>
        </X-Box>
        <!--- 带搜索框 --->
        <X-Box>
          <X-Select placeholder="请选择人员" notfound="无法找到" type="search" style="width: 120px;" :options="options"
                    :value.sync="people"></X-Select>
          <span slot="tit">带搜索框</span>
          <div slot="desc">展开后可对选项进行搜索。</div>
          <p slot="code">
            <X-Code style="background-color: #FFFFFF" for="code2"></X-Code>
          </p>
        </X-Box>
      </X-Col>

      <X-Col span="12" style="padding: 0 8px;">
        <X-Box>
          <X-Select class="select-demo" size="lg" style="width: 150px;" :options="options" :value.sync="value"></X-Select>
          <X-Select class="select-demo" style="width: 150px;" :options="options" :value.sync="value"></X-Select>
          <X-Select class="select-demo" size="sm" style="width: 150px;" :options="options" :value.sync="value"></X-Select>
          <span slot="tit">三种大小</span>
          <div slot="desc">三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 32px 和 22px ，默认高度为 28px</div>
          <p slot="code">
            <X-Code style="background-color: #FFFFFF" for="code3"></X-Code>
          </p>
        </X-Box>
        <!-- 多选 -->
        <X-Box>
          <X-Select style="width: 220px;" :options="options" :value.sync="value" multiple></X-Select>
          <span slot="tit">多选</span>
          <div slot="desc">多选，从已有条目中选择（scroll the menu）</div>
          <p slot="code">
            <X-Code style="background-color: #FFFFFF" for="code3"></X-Code>
          </p>
        </X-Box>
      </X-Col>
    </row>
    <script id="code1" type="text/html">
      <X-Select style="width: 120px;" :options="options" :value.sync="value"></X-Select>
    </script>
    <script id="code2" type="text/html">
      <X-Select placeholder="请选择人员" type="search" style="width: 120px;" :options="options" :value.sync="people"></X-Select>
    </script>
    <script id="code3" type="text/html">
      <X-Select size="lg" style="width: 120px;" :options="options" :value.sync="value"></X-Select>
      <X-Select style="width: 120px;" :options="options" :value.sync="value"></X-Select>
      <X-Select size="sm" style="width: 120px;" :options="options" :value.sync="value"></X-Select>
    </script>
  </div>
</template>
<style>
  .select-demo {
    margin: 0 8px 10px 0;
  }
</style>
<script>
  import {XSelect, XButton, XBox, XCode, Row, XCol} from '../components'

  export default {
    components: {
      XSelect,
      XButton,
      XCode,
      Row,
      XCol,
      XBox
    },
    events: {
      'select-change': function (obj) {
        console.log(obj.text)
      }
    },
    methods: {
      submit () {
        alert(this.value)
      }
    },
    data () {
      return {
        options: [{value: '1', text: 'lady'}, {value: '2', text: '小强', disabled: true}, {value: '3', text: '小明'}],
        value: '3',
        people: '-1'
      }
    }
  }
</script>
