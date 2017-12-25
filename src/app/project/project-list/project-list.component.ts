import { Component, OnInit, HostBinding } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component'
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { alidToRight } from '../../anims/router.anim';
import { listAnimation } from '../../anims/list.anim';
import { THIS_EXPR } from '../../../../node_modules/.5.0.3@@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    alidToRight, listAnimation
  ]
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  projects = [
    {
      "id": 1,
      "name": "企业协作平台",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/0.jpg"

    }, {
      "id": 2,
      "name": "自动化测试项目",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ]
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: "新增项目" } });
    dialogRef.afterClosed().subscribe(re => {
      console.log(re);
      this.projects = [...this.projects, {
        "id": 3,
        "name": "一个新项目",
        "desc": "这是一个新项目",
        "coverImg": "assets/img/covers/8.jpg"
      }, {
        "id": 4,
        "name": "又一个新项目",
        "desc": "这是一个新项目",
        "coverImg": "assets/img/covers/8.jpg"
      }]
    })
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  launchEditDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: "编辑项目" } });
  }

  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: "删除项目", content: "您确认删除该项目么?" } });
    dialogRef.afterClosed().subscribe(re => {
      console.log(re);
      this.projects = this.projects.filter(p => p.id !== project.id)
    });
  }
}
