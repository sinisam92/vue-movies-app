import http from './http-service';
class Movies {
  getAll() {
    return http.get('movies');
  }
  add(movie) {
    return http.post('movies', movie);
  }
}

const movies = new Movies();

export default movies;
