import { getYear } from 'date-fns';

export default {
  computed: {
    releaseDate() {
      return getYear(new Date(this.movie.release_date));
    },
  },
};
