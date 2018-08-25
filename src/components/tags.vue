<template>
    <div>
        <Tag v-for="tag in tags" :key="tag.value" @click="changeTag(tag.router)" type="dot" closable :color="tag.isOn?'primary':''">{{tag.value}}</Tag>
    </div>
</template>
<script>
export default {
  props: ["tags"],
  methods: {
    changeTag: router => {
      this.$router.push({ path: router });
    }
  }
};
</script>

