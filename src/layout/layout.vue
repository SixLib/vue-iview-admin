<template>
    <div class="layout">
        <Layout style="height:100%;">
          <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
            <i-Sider :isCollapsed="isCollapsed" :active="active"/>
          </Sider>
          <Layout>
              <Header :style="{padding: 0}" class="layout-header-bar">
                <i-Header :breadcrumbs="breadcrumbs" :isCollapsed="isCollapsed" v-on:changeProps="listenChangeHeaderProps"/>
              </Header>
                  <!-- <tags :tags="tags"/> -->
              <Content :style="{margin: '2px', background: '#fff'}">
                  <router-view v-on:changeProps="listenChangeProps"></router-view>
              </Content>
          </Layout>
        </Layout>
    </div>
</template>
<script>
import "./layout.css";
import side from "./components/side.vue";
import header from "./components/header.vue";
import tags from "./components/tags.vue";
export default {
  components: {
    "i-Header": header,
    "i-Sider": side,
    tags
  },
  data() {
    return {
      isCollapsed: false,
      active: "",
      breadcrumbs: [],
      tags: [],
      tabsVal: ""
    };
  },
  methods: {
    listenChangeHeaderProps() {
      this.$refs.side1.toggleCollapse();
    },
    listenChangeProps(breadcrumArr, activeStr, tag) {
      this.active = activeStr;
      this.breadcrumbs = breadcrumArr;
      if (this.tags.indexOf(tag) === -1) {
        this.tags.push(tag);
      }
      this.tags.forEach(function(o) {
        if (o != tag) {
          o.isOn = false;
        } else {
          o.isOn = true;
        }
      });
    }
  }
};
</script>
