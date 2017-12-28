import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[app-darggable][dragTag][draggedClass][dragData]'
})
export class DragDirective {

  private _idDraggable = false;
  @Input() dragTag: string;
  @Input() dragData: any;
  @Input('app-darggable')
  set isDraggable(val: boolean) {
    this._idDraggable = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`)
  }

  get isDraggable() {
    return this._idDraggable;
  }

  @Input() draggedClass: string;
  constructor(private el: ElementRef, private rd: Renderer2, private service: DragDropService) { }
  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({ tag: this.dragTag, data: this.dragData });
    }
  }
  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }

}
