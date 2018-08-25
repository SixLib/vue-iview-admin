<template>
    <h1>index</h1>
</template>
<script>
export default {
  props: ["breadcrums", "active","tag"],
  created() {
    this.$emit("changeProps", this.breadcrums, this.active,this.tag);
  }
};
</script>

