<template>
<Card style="margin:120px auto;width:520px;" dis-hover>
  <span slot="title">登录</span>
  <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="loginname">
          <Input type="text" size="large" v-model="formInline.loginname" placeholder="Username" @keyup.enter.native="handleSubmit('formInline')" autofocus>
              <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
      </FormItem>
      <FormItem prop="password">
          <Input type="password" size="large" v-model="formInline.password" placeholder="Password" @keyup.enter.native="handleSubmit('formInline')">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
      </FormItem>
      <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')" long>Signin</Button>
      </FormItem>
  </Form>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        loginname: "admin",
        password: "123456"
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.$Loading.start();
  },
  mounted() {
    this.$Loading.finish();
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$store.dispatch("Login", this.formInline).then(state => {
            if (state) {
              this.$Message.success("登录成功!");
              this.$router.push({ path: "/" });
            } else {
              this.$Message.error("用户名或密码不正确!");
            }
          });
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>
