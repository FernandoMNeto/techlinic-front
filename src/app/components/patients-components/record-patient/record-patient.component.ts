import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  string!: string;

  constructor(  
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.patientService.findPatientById(this.id).subscribe((res) => {
      this.patient = res;
      this.string = JSON.stringify(this.patient)
    });
  }

}