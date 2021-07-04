export default {
  state: {
    users: [],
  },
  actions: {
    async fetchUsers(ctx) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const json = await res.json();

      ctx.commit("UPDATE_USERS", json);
    },
  },
  mutations: {
    UPDATE_USERS(state, users) {
      state.users = users;
    },
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
  },
};
