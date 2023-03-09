import { GenreDto } from "src/models/genres/genre.model";
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDto } from 'src/models/movies/movie.model';
import { MovieService } from 'src/services/movie.service';
import { GenreService } from '../../../services/genre.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent implements OnInit {
  movieForm: FormGroup;
  genres$ = this.genreService.Genres$;
  id = '';
  constructor(
    private movieService: MovieService,
    private genreService: GenreService,
    private route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder
  ) {
    this.movieForm = fb.group({
      title: [''],
      genreId: [''],
      numberInStock: [''],
      dailyRentalRate: [''],
    });
  }

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.movieService.findAll(environment.movieUrl)])
      .pipe(
        map(([paramMap, movies]) => {
          this.id = paramMap.get('id')!;
          const moviesL = movies as MovieDto[];
          const movie = moviesL.find((movie) => movie.id === this.id);
          return this.movieForm.patchValue({
            title: movie?.title,
            genreId: movie?.genreId,
            numberInStock: movie?.numberInStock,
            dailyRentalRate: movie?.dailyRentalRate,
          });
        })
      )
      .subscribe();
  }

  movieSubmit(value: MovieDto): void {
    value.id = this.id;
    value.numberInStock = Number(value.numberInStock);
    value.dailyRentalRate = Number(value.dailyRentalRate);
    this.movieService
      .update(`${environment.movieUrl}/${this.id}`, value)
      .subscribe((movie) => this.router.navigate(['/movies']));
  }

  backToList(): void {
    this.router.navigate(['/movies']);
  }
}
