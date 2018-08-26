<template>
    <div id="markdownMsg"></div>
</template>
<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
export default {
  props: ["breadcrums", "active", "tag"],
  created() {
    this.$Loading.start();
    this.$emit("changeProps", this.breadcrums, this.active, this.tag);
  },
  mounted() {
    this.$store.dispatch("getDocumentData").then(data => {
      document.getElementById("markdownMsg").innerHTML = md.render(data);
    });
    this.$Loading.finish();
  }
};
</script>
