<template>
  <div class="hello">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail">
        <a-icon type="mail" />
        <span>第一项</span>
      </a-menu-item>
      <a-menu-item key="app">
        <a-icon type="appstore" />
        <span>第二项</span>
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <a-icon type="setting" />
          <span>第三项</span>
        </span>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
          <span>第四项</span>
        </a>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { Icon as AIcon, Menu as AMenu } from 'ant-design-vue';

const { SubMenu: ASubMenu, ItemGroup: AMenuItemGroup, Item: AMenuItem } = AMenu;

export default {
  name: 'index',
  data() {
    return {
      current: ['mail'],
    };
  },
  components: {
    AIcon,
    AMenu,
    ASubMenu,
    AMenuItemGroup,
    AMenuItem,
  },
};
</script>

<style lang="less" scoped></style>
