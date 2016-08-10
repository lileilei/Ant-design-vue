<template>
  <div>
    <h1>Menu 导航菜单</h1>
    <p>为页面和功能提供导航的菜单列表。</p>
    <h2>何时使用</h2>
    <p>导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。</p>
    <X-Code for="code1"></X-Code>
    <h2>代码演示</h2>
    <X-Box>
      <ul class="ant-menu ant-menu-horizontal  ant-menu-light ant-menu-root">
        <li class="ant-menu-item-selected ant-menu-item"><i class="anticon anticon-mail"></i>导航一</li>
        <li class="ant-menu-item-disabled ant-menu-item"><i class="anticon anticon-appstore"></i>导航二</li>
        <li class="ant-menu-submenu-horizontal ant-menu-submenu">
          <div class="ant-menu-submenu-title"><span><i class="anticon anticon-setting"></i>导航 - 子菜单</span></div>
          <ul class="ant-menu ant-menu-vertical  ant-menu-sub ant-menu-hidden" id="1470729849495_50">
            <li class=" ant-menu-item-group">
              <div class="ant-menu-item-group-title">分组1</div>
              <ul class="ant-menu-item-group-list">
                <li class="ant-menu-item" role="menuitem" aria-selected="false">选项1</li>
                <li class="ant-menu-item" role="menuitem" aria-selected="false">选项2</li>
              </ul>
            </li>
            <li class=" ant-menu-item-group">
              <div class="ant-menu-item-group-title">分组2</div>
              <ul class="ant-menu-item-group-list">
                <li class="ant-menu-item" role="menuitem" aria-selected="false">选项3</li>
                <li class="ant-menu-item" role="menuitem" aria-selected="false">选项4</li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="ant-menu-item"><a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a></li>
      </ul>
      <span slot="tit">顶部导航</span>
      <div slot="desc">水平的顶部导航菜单。</div>
      <p slot="code">
        <X-Code style="background-color: #FFFFFF" for="code2"></X-Code>
      </p>
    </X-Box>
    <X-Box>
      <ul class="ant-menu ant-menu-inline  ant-menu-light ant-menu-root" style="width: 240px;">
        <li class="ant-menu-submenu-inline ant-menu-submenu-open ant-menu-submenu-selected ant-menu-submenu">
          <div class="ant-menu-submenu-title" style="padding-left: 24px;"><span><i class="anticon anticon-mail"></i><span>导航一</span></span></div>
          <ul class="ant-menu ant-menu-inline  ant-menu-sub">
            <li class=" ant-menu-item-group">
              <div class="ant-menu-item-group-title">分组1</div>
              <ul class="ant-menu-item-group-list">
                <li class="ant-menu-item-selected ant-menu-item" style="padding-left: 48px;">选项1</li>
                <li class="ant-menu-item" role="menuitem" aria-selected="false" style="padding-left: 48px;">选项2</li>
              </ul>
            </li>
            <li class=" ant-menu-item-group">
              <div class="ant-menu-item-group-title">分组2</div>
              <ul class="ant-menu-item-group-list">
                <li class="ant-menu-item" role="menuitem" aria-selected="false" style="padding-left: 48px;">选项3</li>
                <li class="ant-menu-item" role="menuitem" aria-selected="false" style="padding-left: 48px;">选项4</li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="ant-menu-submenu-inline ant-menu-submenu">
          <div class="ant-menu-submenu-title" aria-open="false" aria-owns="1470732264261_60" aria-haspopup="true"
               style="padding-left: 24px;"><span><i class="anticon anticon-appstore"></i><span>导航二</span></span></div>
          <!-- react-empty: 5252 --></li>
        <li class="ant-menu-submenu-inline ant-menu-submenu">
          <div class="ant-menu-submenu-title" aria-open="false" aria-owns="1470732264263_61" aria-haspopup="true"
               style="padding-left: 24px;"><span><i class="anticon anticon-setting"></i><span>导航三</span></span></div>
          <!-- react-empty: 5258 --></li>
      </ul>
      <span slot="tit">内联菜单</span>
      <div slot="desc">垂直菜单，子菜单内嵌在菜单区域。</div>
      <p slot="code">
        <X-Code style="background-color: #FFFFFF" for="code2"></X-Code>
      </p>
    </X-Box>
    <script id="code1" type="text/html">
      <Menu>
        <Menu-Item>菜单项</Menu-Item>
        <Sub-Menu title="子菜单">
          <Menu-Item>子菜单项</Menu-Item>
        </Sub-Menu>
      </Menu>
    </script>
    <script id="code2" type="text/html">
      <Menu>
        <Menu-Item>菜单项</Menu-Item>
        <Sub-Menu title="子菜单">
          <Menu-Item>子菜单项</Menu-Item>
        </Sub-Menu>
      </Menu>
    </script>
  </div>
</template>
<style>

</style>
<script>
  import {XBox, XCode, Row, XCol} from '../components'

  export default {
    components: {
      XCode,
      Row,
      XCol,
      XBox
    }
  }
</script>
