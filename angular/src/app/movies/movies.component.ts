import { Component } from '@angular/core';
import { Movie } from '../interfaces/Movie';
import { MoviesProvider } from './movies.provider';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html'
})
export class MoviesComponent {
    private _movies: Movie[];

    get movies(): Movie[] {
        return this._movies;
    }

    constructor(private _provider: MoviesProvider) {
        this._provider
            .getMovies()
            .subscribe( (data: Movie[]) => this._movies = data);
    }
}
