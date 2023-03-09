import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GenreService } from '../../../services/genre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { GenreDto } from '../../../models/genres/genre.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {
  genreForm: FormGroup;
  id = "";
  constructor(private genreService: GenreService, 
              private route: ActivatedRoute,
              private router: Router,
              fb: FormBuilder) { 
                this.genreForm = fb.group({
                  name: ['']
                })
              }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.genreService.findAll(environment.genreUrl)
    ]).pipe(
      map(([paramMap, genres]) => {
        this.id = paramMap.get('id')!;
        const genresL = genres as GenreDto[];
        const genre = genresL.find(genre => genre.id === this.id);
        return this.genreForm.patchValue({
          name: genre?.name
        })
      })
    ).subscribe();
  }

  genreSubmit(value: GenreDto): void{
    value.id = this.id;
    this.genreService.update(`${environment.genreUrl}/${this.id}`, value).subscribe(genre => this.router.navigate(['/genres']));
  }

  backToList(): void{
    this.router.navigate(['/genres']);
  }
}
