import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDto } from 'src/models/movies/movie.model';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent {
  movie$ = combineLatest([
    this.movieService.findAll(environment.movieUrl) as Observable<MovieDto[]>,
    this.route.paramMap
  ]).pipe(
    map(([movies, paramMap]) => {
      const id = paramMap.get('id');
      return movies.find(movie => movie.id === id);
    })
  )

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

}
