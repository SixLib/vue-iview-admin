import { getToken, setToken, removeToken } from '@/utils/auth'
import {login} from '@/api/login'
const user = {
    state: {
        token: getToken()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },
    actions: {
        Login: async ({ commit },logininfo) => {
            const res = await login(logininfo.user,logininfo.password);
            commit('SET_TOKEN', res);
            setToken(res);
        },
        Logout: ({ commit }) => {
            commit('SET_TOKEN', '');
            removeToken();
        }
    }
}
export default user