import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { getDate } from 'date-fns';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() navClicked = new EventEmitter<void>();
  today = 'day';

  constructor() {
  }

  handleClicked() {
    this.navClicked.emit();
  }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
  }

}
