import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  
  menuStatus: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  menuAction() {
    this.menuStatus = this.menuStatus * -1;
  }

}
