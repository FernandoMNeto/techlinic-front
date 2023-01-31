import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchPacientComponent } from '../../dialogs/search-pacient/search-pacient.component';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {

  menuStatus: number = 1;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  menuAction() {
    this.menuStatus = this.menuStatus * -1;
  }

  openSearchDialog() {
    this.dialog.open(SearchPacientComponent);
  }

}
