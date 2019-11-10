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
   MatButtonModule,
   MatExpansionModule,
   MatIconModule,
   MatBadgeModule
} from '@angular/material';
import { CreateListComponent } from './create-list/create-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ListListComponent } from './list-list/list-list.component';
import { EditListComponent } from './edit-list/edit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateListComponent,
    SearchPipe,
    ListListComponent,
    EditListComponent
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
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatBadgeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
