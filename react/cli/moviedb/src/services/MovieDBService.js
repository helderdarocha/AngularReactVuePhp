import * as axios from 'axios';

export class MovieDBService {
    getMovies(){
        return axios.get('http://localhost:8080/services/webapi.php/movie');
    }
      
    getActors(){
        return axios.get('http://localhost:8080/services/webapi.php/actor');
    }
    
    getDirectors(){
        return axios.get('http://localhost:8080/services/webapi.php/director');
    }
      
    getAll(){
          return axios.all([this.getDirectors(), this.getActors(), this.getMovies()])
          .then(function(arrays) {
              let dataObj = {
                  directors: JSON.parse(arrays[0].data.split('\n').pop()),
                  actors: JSON.parse(arrays[1].data.split('\n').pop()),
                  movies: JSON.parse(arrays[2].data.split('\n').pop())
              };
              return dataObj;
          });
    }    
}
