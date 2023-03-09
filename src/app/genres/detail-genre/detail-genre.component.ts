import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../../services/genre.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GenreDto } from '../../../models/genres/genre.model';

@Component({
  selector: 'app-detail-genre',
  templateUrl: './detail-genre.component.html',
  styleUrls: ['./detail-genre.component.css']
})
export class DetailGenreComponent{
  genre$ = combineLatest([
    this.genreService.findAll(environment.genreUrl) as Observable<GenreDto[]>,
    this.route.paramMap
  ]).pipe(
    map(([genres, paramMap]) => {
      const id = paramMap.get('id');
      return genres.find(genre => genre.id === id);
    })
  )

  constructor(private genreService: GenreService, private route: ActivatedRoute) { }
  
}
