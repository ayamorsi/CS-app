import { Directive , HostListener, HostBinding, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[drop-zone]' // Attribute selector
})
export class DropZoneDirective {
  @Output() dropped =  new EventEmitter<FileList>();
  @Output() hovered =  new EventEmitter<boolean>();
  constructor() { }
  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    this.hovered.emit(false);
  }


}
