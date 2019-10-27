import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

   static prevLength = 0;

   transform(allMovies: Movie[], search: string): Movie[]
   {
      if (search == null || search == '' || search.length <= 3) {
         return allMovies;
      }
      let filteredMovies: Movie[] = [];
      allMovies.filter(function(movie: Movie) {
         if (movie.title.toLowerCase().includes(search.toLowerCase())) {
            filteredMovies.push(movie);
         }
      })
      return filteredMovies;
   }

}
