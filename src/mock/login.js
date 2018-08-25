const userMap = [
  {
    accountName: "admin",
    password: "123456"
  }
];
export default {
  loginByLoginname: config => {
    const user = JSON.parse(config.body);
    if (
      userMap.indexOf({
        accountName: user.loginname,
        password: user.password
      })
    ) {
      return {
        code: 200,
        data: {
          token: user.loginname + user.password
        }
      };
    } else {
      return {
        code: 400
      };
    }
  }
};
