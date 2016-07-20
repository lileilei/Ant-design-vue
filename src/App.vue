<template>
  <div>
    <ul id="aside">
      <li><a v-link="{ path: '/button' }">Button按钮</a></li>
      <li><a v-link="{ path: '/icon' }">Icon图标</a></li>
      <li><a v-link="{ path: '/checkbox' }">Checkbox 多选框</a></li>
      <li><a v-link="{ path: '/input' }">input 输入框</a></li>
      <li><a v-link="{ path: '/radio' }">Radio 单选框</a></li>
      <li><a v-link="{ path: '/switch' }">Switch 开关</a></li>
    </ul>
    <div id="main">
      <router-view>
      </router-view>
    </div>
  </div>
</template>
<style lang="less">
  @import './components/style/index.less';
  @import './components/card/style/index.less';

  h1, h2, h3, h4, h5, h6, strong {
    color: #2c3e50;
  }

  h1 {
    margin-bottom: 30px;
  }

  h2, h3 {
    margin: 30px 0 10px;
  }

  #aside {
    width: 200px;
    padding: 30px 10px 0;
    box-sizing: border-box;
    & li{
      margin-top: 5px;
    }
  }

  #main {
    padding: 20px 10px;
    position: absolute;
    left: 210px;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
  }
</style>
