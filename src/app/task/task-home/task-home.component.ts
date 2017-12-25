import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { alidToRight } from "../../anims/router.anim";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    alidToRight
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  lists = [
    {
      id: 1,
      name: '待办',
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
      name: '进行中',
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
      name: '已完成',
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
  constructor(private dialog: MdDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: "新建任务" } });
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } });
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: "修改任务", task: task } });
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: "删除任务列表", content: "您确认删除该任务列表么？" } });
    dialogRef.afterClosed().subscribe(re => console.log(re));
  }

  launchEditlistDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '更改列表名称' } });
    dialogRef.afterClosed().subscribe(re => console.log(re));
  }

  launchNewlistDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '新增列表' } });
    dialogRef.afterClosed().subscribe(re => console.log(re));
  }

}
