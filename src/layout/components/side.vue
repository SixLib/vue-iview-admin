<template>
    <Menu :active-name="active" theme="dark" width="auto" :class="menuitemClasses">
        <MenuItem name="dashboard" to='/'>
            <Icon type="ios-home"></Icon>
            <span>首页</span>
        </MenuItem>
        <MenuItem name="documentation" to='/documentation'>
            <Icon type="ios-document" />
            <span>文档</span>
        </MenuItem>
    </Menu>
</template>
<script>
export default {
  props: ["active","isCollapsed"],
  computed: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

