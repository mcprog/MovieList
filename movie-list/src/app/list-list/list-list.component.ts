import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieList } from '../movie-list';
import { MovieListService } from '../movie-list.service'

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.css']
})
export class ListListComponent implements OnInit {

   lists: MovieList[];

   constructor(private movieListService: MovieListService) { }

   ngOnInit() {
      this.getMovieLists();
   }

   getMovieLists(): void
   {
       this.lists = this.movieListService.getMovieLists();
   }

}
