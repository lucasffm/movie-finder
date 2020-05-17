export default {
  state: {
    isLoading: false,
    searched: false,
    movies: [],
    movie: {},
  },
  mutations: {
    SEARCH_MOVIE(state, movies) {
      state.movies = movies;
    },
    SEARCH_MOVIE_BY_ID(state, movie) {
      state.movie = movie;
    },
    CLEAR_MOVIE(state) {
      state.movie = {};
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
    async searchMovieById({ commit }, id) {
      commit('IS_LOADING', true);
      const { data } = await this.$axios.get(`/movie/${id}`, {});

      if (!data.Error) {
        this.$toast.success('Movies found successfully!!!', { icon: 'check' });
        commit('SEARCH_MOVIE_BY_ID', data);
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
