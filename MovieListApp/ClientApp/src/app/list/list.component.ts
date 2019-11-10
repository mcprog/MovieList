import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
