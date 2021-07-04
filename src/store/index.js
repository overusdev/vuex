import Vue from "vue";
import Vuex from "vuex";
import post from "./modules/post";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post,
    users,
  },
});
