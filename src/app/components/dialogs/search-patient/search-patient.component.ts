import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  cpf: string = '';

  constructor(
    private patientService: PatientService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  findPatientByCPF(){
    this.patientService.findPatientByCPF(this.cpf);
    this.dialog.closeAll()
  }

}
