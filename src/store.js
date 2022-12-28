import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userData: [],
  },

  actions: {
    login(context, userData) {
      console.log(userData);

      context.commit("login", userData);
    },
  },
  mutations: {
    login(state, userData) {
      state.userData = userData;
    },
  },
});
