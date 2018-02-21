import { Component } from '@angular/core';
import { Actor } from '../interfaces/Actor';
import { ActorsProvider } from './actors.provider';

@Component({
    selector: 'app-actors',
    templateUrl: './actors.component.html'
})
export class ActorsComponent {
    private _actors: Actor[];

    get actors(): Actor[] {
        return this._actors;
    }

    constructor(private _provider: ActorsProvider) {
        this._provider
            .getActors()
            .subscribe( (data: Actor[]) => this._actors = data);
    }
}
