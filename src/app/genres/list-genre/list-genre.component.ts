import { Component} from '@angular/core';
import { GenreService } from '../../../services/genre.service';

@Component({
  selector: 'app-list-genre',
  templateUrl: './list-genre.component.html',
  styleUrls: ['./list-genre.component.css']
})
export class ListGenreComponent {
  genres$ = this.genreService.Genres$;

  constructor(private genreService: GenreService) { }

}
