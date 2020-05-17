const state = () => ({
  isLoading: false,
  searched: false,
  movies: [],
  movie: {},
});

const getters = {};

const mutations = {
  SEARCH_MOVIE(state, movies) {
    state.movies = movies;
    state.isLoading = false;
    state.searched = true;
  },
  SEARCH_MOVIE_BY_ID(state, movie) {
    state.movie = movie;
    state.isLoading = false;
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
};

const actions = {
  async searchMovie({ commit }, payload) {
    commit('IS_LOADING', true);
    const { data } = await this.$axios.get(`/search/movie/`, {
      params: {
        query: payload,
      },
    });

    if (!data.Error) {
      commit('SEARCH_MOVIE', data.results);
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
      commit('SEARCH_MOVIE_BY_ID', data);
    } else {
      this.$toast.error(
        'An error occurred while trying to fetch the movies!!!'
      );
      commit('IS_LOADING', false);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
