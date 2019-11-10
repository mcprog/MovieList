import { MovieList } from './movie-list';
import { MOVIES } from './mock-movies';

export const MOVIE_LISTS: MovieList[] = [
   { id: 0, name: 'Scary', length: 1, movies: [ MOVIES[0] ] },
   { id: 1, name: 'Action', length: 2, movies: [ MOVIES[1], MOVIES[3] ] },
   { id: 2, name: 'Fav', length: 3, movies: [ MOVIES[0], MOVIES[2], MOVIES[3] ] },
   { id: 3, name: 'LongList', length: 6, movies: [ MOVIES[1], MOVIES[0], MOVIES[2], MOVIES[3],  MOVIES[2],  MOVIES[2] ] }
];
