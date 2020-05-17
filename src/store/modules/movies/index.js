export default {
  state: {
    isLoading: false,
    movies: []
  },
  mutations: {
    SEARCH_MOVIE(state, movies) {
      state.movies = movies;
    },
    IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    }
  },
  actions: {
    async searchMovie({ commit }, payload) {
      commit('IS_LOADING', true);
      const { data } = await this.axios.get(`/search/movie/`, {
        params: {
          query: payload,
          language: 'pt-BR'
        }
      });
      console.log(data, payload);
      if (!data.Error) {
        commit('SEARCH_MOVIE', data.results);
      }
      commit('IS_LOADING', false);
    }
  },
  modules: {}
};
