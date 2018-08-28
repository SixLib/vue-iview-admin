<template>
    <Dropdown>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <DropdownMenu slot="list">
            <DropdownItem><a @click="logout">注销</a></DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("Logout").then(() => {
        this.$router.push({ path: "login" });
      });
    }
  }
};
</script>

