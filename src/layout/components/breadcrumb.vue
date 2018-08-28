<template>
    <Breadcrumb>
      <slot></slot>
      <BreadcrumbItem v-for="item in breadcrumbs" :key="item.level" :to="item.router">{{item.value}}</BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
export default {
  props: ["breadcrumbs"]
};
</script>

