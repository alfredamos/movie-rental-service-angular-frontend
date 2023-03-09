import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { DeleteGenreComponent } from './delete-genre/delete-genre.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { DetailGenreComponent } from './detail-genre/detail-genre.component';
import { ListGenreComponent } from './list-genre/list-genre.component';
import { GenreFormComponent } from './form/genre-form/genre-form.component';



@NgModule({
  declarations: [
    AddGenreComponent,
    DeleteGenreComponent,
    EditGenreComponent,
    DetailGenreComponent,
    ListGenreComponent,
    GenreFormComponent
  ],
  imports: [
    SharedModule
  ]
})
export class GenresModule { }
