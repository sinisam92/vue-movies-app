import axios from 'axios';

class Movies {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8000/api/';
  }
  getAll() {
    return axios.get('movies');
  }
}

const movies = new Movies();

export default movies;
