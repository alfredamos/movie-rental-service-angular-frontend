import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreDto } from 'src/models/genres/genre.model';
import { GenreService } from 'src/services/genre.service';

@Component({
  selector: 'app-delete-genre',
  templateUrl: './delete-genre.component.html',
  styleUrls: ['./delete-genre.component.css']
})
export class DeleteGenreComponent {
  id = '';
  deleteMessage = '';
  deleteTitle = '';
  showDeleteItem = false;
  genre: GenreDto = new GenreDto();

  genre$ = combineLatest([
    this.genreService.findAll(environment.genreUrl) as Observable<
      GenreDto[]
    >,
    this.route.paramMap,
  ]).pipe(
    map(([genres, paramMap]) => {
      this.id = paramMap.get('id')!;
      this.genre = genres.find((genre) => genre.id === this.id)!;
      return this.genre;
    })
  );

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  deleteClick() {
    this.deleteMessage = `Do you want to delete category : ${this.genre?.name}?`;
    this.deleteTitle = "Genre Delete Confirmation!";
    this.showDeleteItem = !this.showDeleteItem;
  }

  deleteGenre(value: boolean) {
    if(value){
      this.genreService.remove(`${environment.genreUrl}/${this.id}`).subscribe( gen => this.router.navigate(['/genres']))
    }else{
      this.router.navigate(['/genres']);
    }
  }

}
