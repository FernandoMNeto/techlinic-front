import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  constructor() { }

  menuStatus: number = 1;

  ngOnInit(): void {
  }

  menuAction() {
    this.menuStatus = this.menuStatus * -1;
  }

}
