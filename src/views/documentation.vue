<template>
    <h1>Documentation</h1>
</template>
<script>
export default {
  props: ["breadcrums", "active"],
  created() {
    this.$emit("changeProps", this.breadcrums, this.active);
  }
};
</script>
