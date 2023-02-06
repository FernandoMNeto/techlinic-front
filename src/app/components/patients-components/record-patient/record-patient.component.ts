import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consult } from 'src/app/models/consult/consult.model';
import { PatientRecord } from 'src/app/models/patient/patientRecord.model';
import { PatientService } from 'src/app/services/patient/patient.service';


@Component({
  selector: 'app-record-patient',
  templateUrl: './record-patient.component.html',
  styleUrls: ['./record-patient.component.css']
})
export class RecordPatientComponent implements OnInit {

  id: any;
  patient!: PatientRecord | undefined;
  consults!: Consult[]
  displayedColumns: string[] = ['codigo', 'medico', 'data', 'hora'];

  constructor(  
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.patientService.findPatientById(this.id).subscribe((res) => {
      this.patient = res;
      this.consults = this.patient.consults;
    });
  }

}
