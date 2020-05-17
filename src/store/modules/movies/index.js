export default {
  state: {
    isLoading: false,
    searched: false,
    movies: [],
  },
  mutations: {
    SEARCH_MOVIE(state, movies) {
      state.movies = movies;
    },
    IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SEARCHED(state) {
      state.searched = true;
    },
  },
  actions: {
    async searchMovie({ commit }, payload) {
      commit('IS_LOADING', true);
      const { data } = await this.$axios.get(`/search/movie/`, {
        params: {
          query: payload,
          language: 'pt-BR',
        },
      });

      if (!data.Error) {
        this.$toast.success('Movies found successfully!!!', { icon: 'check' });
        commit('SEARCH_MOVIE', data.results);
        commit('SEARCHED');
        commit('IS_LOADING', false);
      } else {
        this.$toast.error(
          'An error occurred while trying to fetch the movies!!!'
        );
        commit('IS_LOADING', false);
      }
    },
  },
  modules: {},
};
