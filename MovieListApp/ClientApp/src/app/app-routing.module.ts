import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateListComponent } from './create-list/create-list.component';
import { ListComponent } from './list/list.component';
import { ListListComponent } from './list-list/list-list.component';
import { EditListComponent } from './edit-list/edit-list.component';

const routes: Routes = [
   { path: 'create-list', component: CreateListComponent },
   { path: 'movie-list', component: ListComponent },
   { path: 'list-list', component: ListListComponent },
   { path: 'edit-list', component: EditListComponent },
   { path: '', redirectTo: '/movie-list', pathMatch: 'full' }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
