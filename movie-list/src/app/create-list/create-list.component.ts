import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../mock-movies';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

   movies = MOVIES;
   searchText: string = null;

  constructor() { }

  ngOnInit() {
  }

}
