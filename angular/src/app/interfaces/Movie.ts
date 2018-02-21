import { Director } from './Director';
import { Actor } from './Actor';

export interface Movie {
    imdb: string;
    title: string;
    year: number;
    duration: number;
    poster: string;
    director: Director;
    actors: Actor[];
}
