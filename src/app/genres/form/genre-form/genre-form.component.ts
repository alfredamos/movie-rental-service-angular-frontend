import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenreDto } from '../../../../models/genres/genre.model';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent {
  @Input() genreForm: FormGroup;
  @Input() formName = "";
  @Output() onGenreSubmit = new EventEmitter<GenreDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(fb: FormBuilder) {
    this.genreForm = fb.group({
      name: ['', Validators.required]
    })
   }

   genreSubmit(): void{
    this.onGenreSubmit.emit(this.genreForm.value);
   }

   backToList(): void{
    this.onBackToList.emit();
   }
}
