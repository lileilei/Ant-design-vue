<template>
  <div>
    <header class="clearfix">
      <div class="ant-row">
        <div class="ant-col-xs-24 ant-col-sm-7 ant-col-md-6 ant-col-lg-4">
          <a id="logo" href="/"><img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"><span>Ant Design</span></a>
        </div>
      </div>
      <div class="nav  ant-col-xs-0 ant-col-sm-17 ant-col-md-18 ant-col-lg-20">
      </div>
    </header>
    <div class="main-wrapper">
      <div class="ant-row">
        <div class="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
          <li><a v-link="{ path: '/button' }">Button按钮</a></li>
          <li><a v-link="{ path: '/icon' }">Icon图标</a></li>
          <li><a v-link="{ path: '/checkbox' }">Checkbox 多选框</a></li>
          <li><a v-link="{ path: '/input' }">input 输入框</a></li>
          <li><a v-link="{ path: '/radio' }">Radio 单选框</a></li>
          <li><a v-link="{ path: '/switch' }">Switch 开关</a></li>
          <li><a v-link="{ path: '/select' }">Select 选择器</a></li>
          <li><a v-link="{ path: '/layout' }">Layout 布局</a></li>
          <li><a v-link="{ path: '/menu' }">Menu导航菜单</a></li>
        </div>
        <div class="main-container ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-20">
          <div class="markdown">
            <router-view keep-alive></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {Menu, MenuItem, subMenu} from './components/menu'
  export default {
    components: {
      vMenu: Menu,
      MenuItem,
      subMenu
    }
  }
</script>
<style lang="less">
  @import './components/style/index.less';
  @import './components/card/style/index.less';
  @import './components/layout/style/index.less';

  body {
    background: #ececec;
  }

  header {
    transition: opacity .5s;
    background: #fff;
    border-bottom: 1px solid #eee;
    height: 80px;
    margin-bottom: 24px;
    padding: 0 4%;
    width: 100%;
  }

  #logo, #logo img {
    height: 80px;
    line-height: 80px;
  }

  #logo {
    float: left;

  img {
    width: 40px;
    margin-right: 8px;
  }

  span {
    float: right;
    font-size: 16px;
    font-family: Raleway, Hiragino Sans GB, sans-serif;
    height: 80px;
    line-height: 80px;
    text-transform: uppercase;
  }

  }

  .main-wrapper {
    width: 92%;
    margin: 0 auto;
    border-radius: 6px;
    padding: 24px 0 0;
    margin-bottom: 24px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
  }

  div.main-container {
    padding: 0 6% 120px 4%;
    margin-left: -1px;
    min-height: 500px;
    border-left: 1px solid #e9e9e9;
  }
  .main-wrapper, div.main-container {
    background: #fff;
    overflow: hidden;
    position: relative;
  }

  .markdown {
    color: #666;
    font-size: 14px;
    line-height: 1.8;

  h1 {
    color: #404040;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 24px;
    margin-top: 8px;
    font-size: 28px;
    font-family: lato, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  }

  p, pre {
    margin: 1em 0;
  }

  h2 {
    font-size: 22px;
  }

  h2, h3, h4, h5, h6 {
    color: #404040;
    font-family: lato, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    margin: 1.6em 0 .6em;
    font-weight: 500;
    clear: both;
  }

  }

  .code-boxes-col-2-1 {
    display: inline-block;
    vertical-align: top;
    padding: 0 8px;
  }

  .aside-container {
    padding-bottom: 50px;
  }

  .aside-container .ant-menu-item a, .aside-container .ant-menu-submenu-title span, .aside-container > .ant-menu-item {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

</style>
