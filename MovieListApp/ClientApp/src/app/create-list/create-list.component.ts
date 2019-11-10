import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

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
