import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

   movies: Movie[];

   constructor(private movieService: MovieService) { }

   ngOnInit() {
      this.getMovies();
   }

   getMovies(): void
   {
       this.movies = this.movieService.getMovies();
   }

}
