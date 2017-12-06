import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/* import { Neo4jD3 } from 'Neo4jD3'; */
import * as d3 from 'd3';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    console.log(d3);
  }

  openSidebar() {
    this.toggle.emit();
  }

  onChange(checked: boolean) {
    this.toggleDarkTheme.emit(checked);
  }

}
