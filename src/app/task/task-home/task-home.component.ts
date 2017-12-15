import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: 'daiban',
      tasks: [
        {
          id: 1,
          desc: 'renwuyi:qumaikaifei',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: 'zhangsan',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: 'renwuyi2:qumaikaifei',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'lisi',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 2,
      name: 'jingxingzhong',
      tasks: [
        {
          id: 1,
          desc: 'renwuyi:qumaikaifei',
          completed: true,
          priority: 2,
          owner: {
            id: 1,
            name: 'zhangsan',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'renwuyi2:qumaikaifei',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: 'lisi',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 3,
      name: 'yiwangcheng',
      tasks: [
        {
          id: 3,
          desc: 'renwuyi3:qumaikaifei',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: 'zhangsan',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
        },
        {
          id: 4,
          desc: 'renwuyi4:qumaikaifei',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: 'lisi',
            avatar: 'avatars:svg-14'
          },
          dueDate: new Date(),
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
