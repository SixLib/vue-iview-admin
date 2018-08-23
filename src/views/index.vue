<template>
    <h1>index</h1>
</template>
<script>
export default {
  props: ["breadcrums", "active"],
  created() {
    this.$emit("changeProps", this.breadcrums, this.active);
  }
};
</script>

