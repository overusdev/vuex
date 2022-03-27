import axios from 'axios';

export default {
  namespaced: true,
  state: {
    users: [],
  },
  actions: {
    async fetchUsers(ctx) {
      const usersDataQuery = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/users/',
      });

      ctx.commit("SET_USERS", usersDataQuery.data.results);
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  getters: {
    getAllUsers(state) {
      return state.users;
    },
    getAllUsersCount(state) {
      return state.users.length;
    },
  },
};
