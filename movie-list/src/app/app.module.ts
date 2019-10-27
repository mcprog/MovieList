import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './layout/app.component';
import { ListComponent } from './list/list.component';
import { SearchPipe } from './search.pipe'
import { FormsModule } from '@angular/forms';


import {
   MatInputModule,
   MatListModule,
   MatCardModule,
   MatSidenavModule,
   MatToolbarModule,
   MatDividerModule,
   MatButtonModule
} from '@angular/material';
import { CreateListComponent } from './create-list/create-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
