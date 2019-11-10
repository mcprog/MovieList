import { Injectable } from '@angular/core';
import { MovieList } from './movie-list';
import { MOVIE_LISTS } from './mock-movie-lists';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor() { }

  getMovieLists(): MovieList[]
  {
     return MOVIE_LISTS;
  }
}
