<template>
    <div>
        <Tag v-for="tag in tags" :key="tag.value" @on-close="handleClose" type="dot" closable :color="tag.isOn?'primary':''">{{tag.value}}</Tag>
    </div>
</template>
<script>
export default {
  props: ["tags"],
  methods: {
    handleClose: () => {
      // var index = this.tags.indexOf(tag);
      // this.tags.splice(index, 1);
      this.$router.push({ path: "/" });
    }
  }
};
</script>

