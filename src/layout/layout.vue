<template>
    <div class="layout">
        <Layout style="height:100%;">
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
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
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Row type="flex" justify="end" class="code-row-bg">
                      <Col span="23">
                        <Breadcrumb>
                          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                          <BreadcrumbItem v-for="item in breadcrums" :key="item.level" :to="item.router">{{item.value}}</BreadcrumbItem>
                        </Breadcrumb>
                      </Col>
                      <Col span="1">
                      <Dropdown>
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                        <DropdownMenu slot="list">
                            <DropdownItem><a @click="logout">注销</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                      </Col>
                    </Row>
                </Header>
                   
               <Content :style="{margin: '20px', background: '#fff'}">
                    <router-view v-on:changeProps="listenChangeProps"></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import './layout.css'
export default {
  data() {
    return {
      isCollapsed: false,
      active: "",
      breadcrums: [],
      tags: [],
      tabsVal: ""
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    listenChangeProps(breadcrumArr, activeStr) {
      this.active = activeStr;
      this.breadcrums = breadcrumArr;
    },
    tabsClick(router) {
      this.$router.push({ path: router });
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    logout() {
      this.$store.dispatch("Logout").then(() => {
        this.$router.push({ path: "login" });
      });
    }
  }
};
</script>
