import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorys',
  templateUrl: './relatorys.component.html',
  styleUrls: ['./relatorys.component.css']
})
export class RelatorysComponent implements OnInit {

  menuStatus: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  menuAction() {
    this.menuStatus = this.menuStatus * -1;
  }

}
