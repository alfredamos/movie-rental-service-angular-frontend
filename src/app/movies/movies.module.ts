import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MovieFormComponent } from './form/movie-form/movie-form.component';

@NgModule({
  declarations: [
    AddMovieComponent,
    DeleteMovieComponent,
    EditMovieComponent,
    DetailMovieComponent,
    ListMovieComponent,
    MovieFormComponent,
  ],
  imports: [SharedModule],
})
export class MoviesModule {}
