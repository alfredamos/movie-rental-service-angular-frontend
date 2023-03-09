import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieDto } from '../../../models/movies/movie.model';
import { MovieService } from '../../../services/movie.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { GenreService } from '../../../services/genre.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent {
  movieForm: FormGroup;
  genres$ = this.genreService.Genres$;

  constructor(private movieService: MovieService,
              private router: Router,
              private genreService: GenreService,
              fb: FormBuilder) {
    this.movieForm = fb.group({
      title: [''],
      genreId: [''],
      numberInStock: [''],
      dailyRentalRate: [''],
    });
  }

  movieSubmit(value: MovieDto): void{
    this.movieService.create(environment.movieUrl, value).subscribe(movie => this.router.navigate(['/movies']));
  }

  backToList(): void{
    this.router.navigate(['/movies']);
  }
}
