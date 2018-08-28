<template>
    <Row type="flex" justify="end" class="code-row-bg">
        <Col span="23">
            <i-Breadcrumb :breadcrumbs="breadcrumbs">
                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
            </i-Breadcrumb>
        </Col>
        <Col span="1">
            <i-User/>
        </Col>
    </Row>
</template>
<script>
import user from "./user.vue";
import breadcrumb from "./breadcrumb.vue";

export default {
  props: ["breadcrumbs", "isCollapsed"],
  components: {
    "i-Breadcrumb": breadcrumb,
    "i-User": user
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$emit("changeProps");
    }
  }
};
</script>

