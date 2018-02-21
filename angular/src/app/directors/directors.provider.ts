import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Director } from '../interfaces/Director';

@Injectable()
export class DirectorsProvider {
    constructor(private _http: HttpClient) {}

    getDirectors(): Observable<Director[]> {
        return this._http.get<Director[]>(
            'http://localhost:8080/services/webapi.php/director'
        );
    }

}
