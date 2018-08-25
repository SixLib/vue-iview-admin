<template>
<Layout>
  <EchartLine/>
</Layout>
</template>
<script>
import EchartLine from "../../components/echarts/line.vue";
export default {
  props: ["breadcrums", "active", "tag"],
  components: { EchartLine },
  created() {
    this.$Loading.start();
    this.$emit("changeProps", this.breadcrums, this.active, this.tag);
  },
  mounted() {
    this.$Loading.finish();
  }
};
</script>

