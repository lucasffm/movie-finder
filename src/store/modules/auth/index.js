const state = () => ({
  isLoading: false,
  isLoggedIn: false,
});

const getters = {};

const mutations = {
  LOGIN(state) {
    state.isLoggedIn = true;
  },
  LOGGOUT(state) {
    state.isLoggedIn = false;
  },
};

const actions = {
  doLogin({ commit }, payload) {
    if (payload.length) {
      commit('LOGIN');
      this.$toast.success('You are in');
      this.$router.push('/home');
    }
  },
  doLogout({ commit }) {
    commit('LOGGOUT');
    this.$toast.info('You are out!');
    this.$router.push('/');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
