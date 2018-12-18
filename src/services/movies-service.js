import http from './http-service';
class Movies {
  getAll() {
    return http.get('movies');
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