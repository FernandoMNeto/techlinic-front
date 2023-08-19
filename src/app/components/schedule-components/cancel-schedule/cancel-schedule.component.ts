import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { Consult } from 'src/app/models/consult/consult.model';
import { PatientRecord } from 'src/app/models/patient/patientRecord.model';
import { CpfPipe } from 'src/app/pipes/cpf/cpf.pipe';
import { ConsultService } from 'src/app/services/consult/consult.service';
import { PatientService } from 'src/app/services/patient/patient.service';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cancel-schedule',
  templateUrl: './cancel-schedule.component.html',
  styleUrls: ['./cancel-schedule.component.css']
})
export class CancelScheduleComponent implements OnInit {
  myControl = new FormControl('');
  filteredOptions!: Observable<PatientRecord[]>;
  patients: PatientRecord[] = [];

  patientId!: String;

  schedules: Consult[] = []


  constructor(
    private pService: PatientService,
    private cService: ConsultService,
    private dialog: MatDialog,
    private toast: NgToastService,
    private d: Dialog
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

  findNextConsults(event: MatAutocompleteSelectedEvent) {
    this.schedules = []
    this.patientId = event.option.value.id;
    const inputElement = document.getElementById('selected-patient-input') as HTMLInputElement;
    inputElement.value = this.select(event.option.value);
    this.cService.findNextConsults(this.patientId).subscribe((res) => {
      for(var i = 0; i < res.length; i++) {
        this.schedules.push(res[i]);
      }
    })
  }

  select(p: PatientRecord) {
    return p ? `${p.firstName} ${p.lastName}` : '';
  }

  cancelSchedule(schedule: Consult) {
    
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '400px',
        data: `Deseja cancelar este agendamento? data: ${schedule.date} ás ${schedule.time}`
    })
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cService.cancelSchedule(schedule.id).subscribe({
          next: (res) => {
            this.d.closeAll()
            this.toast.success({detail: "Agendamento cancelado com sucesso!"});
          }
        })
      }
    }) 
  }

}
