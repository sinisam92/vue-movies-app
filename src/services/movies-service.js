import http from './http-service';
class Movies {
  getAll(title = '', take = 10, skip = 0) {
    return http
      .get('movies', { params: { title, take, skip } })
      .then(({ data }) => data);
  }
  add(movie) {
    return http.post('movies', movie);
  }
  getMovie(id) {
    return http.get(`movies/${id}`).then((response) => response);
  }
}

const movies = new Movies();

export default movies;
