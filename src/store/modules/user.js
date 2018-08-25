import { getToken, setToken, removeToken } from "@/utils/auth";
import { login } from "@/api/login";
const user = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    Login: async ({ commit }, logininfo) => {
      const res = await login(logininfo);
      if (res.code == 200) {
        commit("SET_TOKEN", res.data.token);
        setToken(res.data.token);
      }
      return res.code == 200 ? true : false;
    },
    Logout: ({ commit }) => {
      commit("SET_TOKEN", "");
      removeToken();
    }
  }
};
export default user;
