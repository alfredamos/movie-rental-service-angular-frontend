import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GenreService } from '../../../services/genre.service';
import { GenreDto } from '../../../models/genres/genre.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent {
  genreForm: FormGroup;

  constructor(private genreService: GenreService, private router: Router, fb: FormBuilder) {
    this.genreForm = fb.group({
      name: ['']
    })
   }

  genreSubmit(value: GenreDto){
    this.genreService.create(environment.genreUrl, value).subscribe(genres => this.router.navigate(['/genres']));
  }

  backToList(){
    this.router.navigate(['/genres'])
  }
}
