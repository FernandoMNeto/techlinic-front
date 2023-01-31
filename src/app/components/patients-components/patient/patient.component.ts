import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchPatientComponent } from '../../dialogs/search-patient/search-patient.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

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
    this.dialog.open(SearchPatientComponent);
  }

}
