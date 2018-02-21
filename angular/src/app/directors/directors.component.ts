import { Component } from '@angular/core';
import { Director } from '../interfaces/Director';
import { DirectorsProvider } from './directors.provider';

@Component({
    selector: 'app-directors',
    templateUrl: './directors.component.html',
})
export class DirectorsComponent {
    private _directors: Director[];

    get directors(): Director[] {
        return this._directors;
    }

    constructor(private _directorsProvider: DirectorsProvider) {
        this._directorsProvider
            .getDirectors()
            .subscribe( (data: Director[]) => this._directors = data);
    }
}
