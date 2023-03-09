import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDto } from 'src/models/movies/movie.model';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css'],
})
export class DeleteMovieComponent {
  id = '';
  deleteMessage = '';
  deleteTitle = '';
  showDeleteItem = false;
  movie: MovieDto = new MovieDto();

  movie$ = combineLatest([
    this.movieService.findAll(environment.movieUrl) as Observable<MovieDto[]>,
    this.route.paramMap,
  ]).pipe(
    map(([movies, paramMap]) => {
      this.id = paramMap.get('id')!;
      this.movie = movies.find((movies) => movies.id === this.id)!;
      return this.movie;
    })
  );

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  deleteClick() {
    this.deleteMessage = `Do you want to delete category : ${this.movie?.title}?`;
    this.deleteTitle = 'Movie Delete Confirmation!';
    this.showDeleteItem = !this.showDeleteItem;
  }

  deleteMovie(value: boolean) {
    if (value) {
      this.movieService
        .remove(`${environment.movieUrl}/${this.id}`)
        .subscribe((gen) => this.router.navigate(['/movies']));
    } else {
      this.router.navigate(['/movies']);
    }
  }
}
