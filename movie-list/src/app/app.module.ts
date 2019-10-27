import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './layout/app.component';
import { ListComponent } from './list/list.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
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
