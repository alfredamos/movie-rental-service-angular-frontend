import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieDto } from 'src/models/movies/movie.model';
import { GenreService } from 'src/services/genre.service';
import { Observable } from 'rxjs';
import { GenreDto } from '../../../../models/genres/genre.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent {
  @Input() movieForm: FormGroup;
  @Input() formName = '';
  @Input() genres$ = new Observable<GenreDto[]>;
  @Output() onMovieSubmit = new EventEmitter<MovieDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(fb: FormBuilder){
    this.movieForm = fb.group({
      title: ['', Validators.required],
      genreId: ['', Validators.required],
      numberInStock: ['', Validators.required],
      dailyRentalRate: ['', Validators.required],
    });
  }

  movieSubmit(): void {
    this.onMovieSubmit.emit(this.movieForm.value);
  }

  backToList(): void {
    this.onBackToList.emit();
  }
}
