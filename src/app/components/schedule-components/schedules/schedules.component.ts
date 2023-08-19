import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { CancelScheduleComponent } from '../cancel-schedule/cancel-schedule.component';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {


  constructor(
    private dialog: Dialog
  ) { }

  menuStatus: number = 1;

  ngOnInit(): void {
  }

  menuAction() {
    this.menuStatus = this.menuStatus * -1;
  }

  cancel() {
    this.dialog.open( CancelScheduleComponent, {
        width: '50vw',
        height: '50vh'
      })
  }
}
