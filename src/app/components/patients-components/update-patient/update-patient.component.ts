import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientRecord } from 'src/app/models/patient/patientRecord.model';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  updateForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public patient: PatientRecord,
    private patientService: PatientService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formBuilder.group
    
  }

  

}
