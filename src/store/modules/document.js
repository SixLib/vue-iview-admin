import { getDocumentData } from "@/api/document";
const documentation = {
  state: {
    token: false
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    getDocumentData: async ({ commit }) => {
      const res = await getDocumentData();
      if (res.code == 200) {
        commit("SET_TOKEN", true);
      }
      return res.data;
    }
  }
};
export default documentation;
