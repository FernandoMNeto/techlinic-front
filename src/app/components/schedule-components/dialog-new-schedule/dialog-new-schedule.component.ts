import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventManager } from '@angular/platform-browser';
import { Observable, map, startWith } from 'rxjs';
import { Doctor } from 'src/app/models/doctor/doctor.model';
import { Patient } from 'src/app/models/patient/patient.model';
import { PatientRecord } from 'src/app/models/patient/patientRecord.model';
import { ConsultService } from 'src/app/services/consult/consult.service';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-dialog-new-schedule',
  templateUrl: './dialog-new-schedule.component.html',
  styleUrls: ['./dialog-new-schedule.component.css']
})
export class DialogNewScheduleComponent implements OnInit {

  myControl = new FormControl('');
  filteredOptions!: Observable<PatientRecord[]>;

  patients: PatientRecord[] = [];
  hour: String = this.data[0];
  doctor: Doctor = this.data[1];
  date: String = this.data[2];
  pSelected!: PatientRecord;
  idPSelected!: String;
  observation: String = "";
  complaint: String = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pService: PatientService,
    private cService: ConsultService,
    private dialog: Dialog
    ) { }

  ngOnInit(): void {
  this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );

    this.pService.findAllPatients().subscribe((res) => {
      for(var i = 0; i<res.length; i++) {
        this.patients.push(res[i])
      }
    })
  }

  private _filter(value: string): PatientRecord[] {
    const filterValue = value.toLowerCase();

    return this.patients.filter(option => option.firstName.toLowerCase().includes(filterValue));
  }

  patientSelected(event: MatAutocompleteSelectedEvent) {
    this.pSelected = event.option.value
    this.idPSelected = this.pSelected.id

    const inputElement = document.getElementById('selected-patient-input') as HTMLInputElement;
    inputElement.value = `${this.pSelected.firstName} ${this.pSelected.lastName}`
    console.log(this.pSelected)
  }

  submit() {
    this.cService.postSchedule(this.doctor, this.idPSelected, this.observation, this.complaint, this.hour, this.date)
    this.dialog.closeAll()
  }

}
