<template>
  <div>
    <h1>Layout 布局</h1>
    <p><!-- react-text: 288 -->24 栅格系统。<!-- /react-text --></p>
    <h2>设计理念</h2>
    <div class="layout-demo">
      <row class="demo-row">
        <X-Col span="24" class="demo-col demo-col-1">100%</X-Col>
      </row>
      <row class="demo-row">
        <X-Col span="6" class="demo-col demo-col-2">25%</X-Col>
        <X-Col span="6" class="demo-col demo-col-3">25%</X-Col>
        <X-Col span="6" class="demo-col demo-col-2">25%</X-Col>
        <X-Col span="6" class="demo-col demo-col-3">25%</X-Col>
      </row>
      <row class="demo-row">
        <X-Col span="8" class="demo-col demo-col-4">33.33%</X-Col>
        <X-Col span="8" class="demo-col demo-col-5">33.33%</X-Col>
        <X-Col span="8" class="demo-col demo-col-4">33.33%</X-Col>
      </row>
      <row class="demo-row">
        <X-Col span="12" class="demo-col demo-col-1">50%</X-Col>
        <X-Col span="12" class="demo-col demo-col-3">50%</X-Col>
      </row>

      <row class="demo-row">
        <X-Col span="16" class="demo-col demo-col-4">50%</X-Col>
        <X-Col span="8" class="demo-col demo-col-5">50%</X-Col>
      </row>

      <h2>Flex布局</h2>
      <p>我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。</p>
      <p>Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但排版则不拘泥于栅格。</p>
      <h2>代码演示</h2>
      <X-Box>
      <row>
        <X-Col span="12">.ant-col-12</X-Col>
        <X-Col span="12">.ant-col-12</X-Col>
      </row>
      <row>
        <X-Col span="8">.ant-col-8</X-Col>
        <X-Col span="8">.ant-col-8</X-Col>
        <X-Col span="8">.ant-col-8</X-Col>
      </row>
      <row>
        <X-Col span="6">.ant-col-6</X-Col>
        <X-Col span="6">.ant-col-6</X-Col>
        <X-Col span="6">.ant-col-6</X-Col>
        <X-Col span="6">.ant-col-6</X-Col>
      </row>
      <span slot="tit">基础布局</span>
      <div slot="desc">使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在Row内。</div>
      <p slot="code">
        <X-Code style="background-color: #FFFFFF" for="code1"></X-Code>
      </p>
    </X-Box>
      <X-Box>
        <row>
          <X-Col span="8">.ant-col-8</X-Col>
          <X-Col span="8" offset="8">.ant-col-8</X-Col>
        </row>
        <row>
          <X-Col span="6" offset="6">.ant-col-6 .ant-col-offset-6</X-Col>
          <X-Col span="6" offset="6">.ant-col-6 .ant-col-offset-6</X-Col>
        </row>
        <row>
          <X-Col span="12" offset="12">.ant-col-12 .ant-col-offset-6</X-Col>
        </row>
        <span slot="tit">左右偏移</span>
        <div slot="desc">
          <p></p>列偏移
          <p>使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。</p>
        </div>
        <p slot="code">
          <X-Code style="background-color: #FFFFFF" for="code2"></X-Code>
        </p>
      </X-Box>
    </div>
  </div>
  <script id="code1" type="text/html">
    <Row>
      <X-Col span="*"></X-Col>
    </Row>
  </script>
  <script id="code2" type="text/html">
    <row>
      <X-Col span="6" offset="6">.ant-col-6 .ant-col-offset-6</X-Col>
      <X-Col span="6" offset="6">.ant-col-6 .ant-col-offset-6</X-Col>
    </row>
  </script>
</template>
<script>
  import {XBox, XCode, Row, XCol} from '../components'

  export default {
    components: {
      XBox,
      XCode,
      Row,
      XCol
    }
  }
</script>
<style lang="less">
  .layout-demo .code-box-demo .demo-row, .layout-demo .demo-row, [id^=components-layout-demo-] .code-box-demo .demo-row, [id^=components-layout-demo-] .demo-row {
    background-image: -webkit-linear-gradient(left, #f5f5f5 4.16666667%, transparent 0, transparent 8.33333333%, #f5f5f5 0, #f5f5f5 12.5%, transparent 0, transparent 16.66666667%, #f5f5f5 0, #f5f5f5 20.83333333%, transparent 0, transparent 25%, #f5f5f5 0, #f5f5f5 29.16666667%, transparent 0, transparent 33.33333333%, #f5f5f5 0, #f5f5f5 37.5%, transparent 0, transparent 41.66666667%, #f5f5f5 0, #f5f5f5 45.83333333%, transparent 0, transparent 50%, #f5f5f5 0, #f5f5f5 54.16666667%, transparent 0, transparent 58.33333333%, #f5f5f5 0, #f5f5f5 62.5%, transparent 0, transparent 66.66666667%, #f5f5f5 0, #f5f5f5 70.83333333%, transparent 0, transparent 75%, #f5f5f5 0, #f5f5f5 79.16666667%, transparent 0, transparent 83.33333333%, #f5f5f5 0, #f5f5f5 87.5%, transparent 0, transparent 91.66666667%, #f5f5f5 0, #f5f5f5 95.83333333%, transparent 0);
  }

  .layout-demo .ant-row-flex > div, .layout-demo .ant-row > div, .layout-demo .code-box-demo .ant-row-flex > div, .layout-demo .code-box-demo .ant-row > div, [id^=components-layout-demo-] .ant-row-flex > div, [id^=components-layout-demo-] .ant-row > div, [id^=components-layout-demo-] .code-box-demo .ant-row-flex > div, [id^=components-layout-demo-] .code-box-demo .ant-row > div {
    padding: 5px 0;
    text-align: center;
    border-radius: 6px;
    min-height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #fff;
  }

  .layout-demo .ant-row .demo-col-1, [id^=components-layout-demo-] .ant-row .demo-col-1 {
    background: rgba(29, 128, 211, .7);
  }

  .layout-demo .ant-row .demo-col, .layout-demo .code-box-demo .ant-row .demo-col, [id^=components-layout-demo-] .ant-row .demo-col, [id^=components-layout-demo-] .code-box-demo .ant-row .demo-col {
    text-align: center;
    padding: 40px 0;
    color: #fff;
    font-size: 18px;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
  }

  .layout-demo .ant-row .demo-col-3, .layout-demo .code-box-demo .ant-row .demo-col-3, [id^=components-layout-demo-] .ant-row .demo-col-3, [id^=components-layout-demo-] .code-box-demo .ant-row .demo-col-3 {
    background: hsla(0, 0%, 100%, .2);
    color: #999;
  }

  .layout-demo .ant-row .demo-col-5, .layout-demo .code-box-demo .ant-row .demo-col-5, [id^=components-layout-demo-] .ant-row .demo-col-5, [id^=components-layout-demo-] .code-box-demo .ant-row .demo-col-5 {
    background: hsla(0, 0%, 100%, .5);
    color: #999;
  }

  .layout-demo .ant-row .demo-col-2, .layout-demo .code-box-demo .ant-row .demo-col-2, [id^=components-layout-demo-] .ant-row .demo-col-2, [id^=components-layout-demo-] .code-box-demo .ant-row .demo-col-2 {
    background: rgba(29, 128, 211, .5);
  }

  .layout-demo .ant-row .demo-col-4, .layout-demo .code-box-demo .ant-row .demo-col-4, [id^=components-layout-demo-] .ant-row .demo-col-4, [id^=components-layout-demo-] .code-box-demo .ant-row .demo-col-4 {
    background: rgba(29, 128, 211, .6);
  }

  .layout-demo .code-box-demo .ant-row-flex > div:not(.gutter-row), .layout-demo .code-box-demo .ant-row > div:not(.gutter-row), [id^=components-layout-demo-] .code-box-demo .ant-row-flex > div:not(.gutter-row), [id^=components-layout-demo-] .code-box-demo .ant-row > div:not(.gutter-row) {
    background: #6ac2f5;
    border: 1px solid rgba(0, 0, 0, .1);
  }
</style>
