import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      "name": "企业协作平台",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/o.jpg"

    }, {
      "name": "自动化测试项目",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
