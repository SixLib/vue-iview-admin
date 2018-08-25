<template>
    <h1>Documentation</h1>
</template>
<script>
export default {
  props: ["breadcrums", "active", "tag"],
  created() {
    this.$Loading.start();
    this.$emit("changeProps", this.breadcrums, this.active, this.tag);
  },
  mounted() {
    this.$Loading.finish();
  }
};
</script>
