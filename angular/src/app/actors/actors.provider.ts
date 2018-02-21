import { Injectable } from '@angular/core';
import { Actor } from '../interfaces/Actor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActorsProvider {

    constructor(private _http: HttpClient) {}

    getActors(): Observable<Actor[]> {
        return this._http.get<Actor[]>(
            'http://localhost:8080/services/webapi.php/actor'
        );
    }
}
