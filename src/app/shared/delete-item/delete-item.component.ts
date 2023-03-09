import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
})
export class DeleteItemComponent implements OnInit {
  @Input() deleteMessage = '';
  @Input() deleteTitle = '';
  @Input() submitButton = '';
  @Input() cancelButton = '';
  @Output() onDeleteSubmit = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  deleteItem(value: boolean) {
    this.onDeleteSubmit.emit(value);
  }
}
