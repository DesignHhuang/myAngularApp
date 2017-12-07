import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OutletContext } from '../../../../node_modules/.5.0.3@@angular/router/src/router_outlet_context';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onInviteClick() {
    this.onInvite.emit();
  }
}
