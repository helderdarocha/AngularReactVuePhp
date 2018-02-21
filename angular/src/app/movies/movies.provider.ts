import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../interfaces/Movie';

@Injectable()
export class MoviesProvider {
    constructor(private _http: HttpClient) {}

    getMovies(): Observable<Movie[]> {
        return this._http.get<Movie[]>(
            'http://localhost:8080/services/webapi.php/movie'
        );
    }
}
