import { Component} from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent {
  movies$ = this.movieService.Movies$;

  constructor(private movieService: MovieService) { }

}
