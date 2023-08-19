import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { agendTable } from 'src/app/models/agendamento-table/agendTable.model';
import { Consult } from 'src/app/models/consult/consult.model';
import { Doctor } from 'src/app/models/doctor/doctor.model';
import { ConsultService } from 'src/app/services/consult/consult.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { DialogNewScheduleComponent } from '../dialog-new-schedule/dialog-new-schedule.component';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.css']
})
export class NewScheduleComponent implements OnInit {
hours: string[] = [
    '00:00',
    '00:15',
    '00:30',
    '00:45',
    '01:00',
    '01:15',
    '01:30',
    '01:45',
    '02:00',
    '02:15',
    '02:30',
    '02:45',
    '03:00',
    '03:15',
    '03:30',
    '03:45',
    '04:00',
    '04:15',
    '04:30',
    '04:45',
    '05:00',
    '05:15',
    '05:30',
    '05:45',
    '06:00',
    '06:15',
    '06:30',
    '06:45',
    '07:00',
    '07:15',
    '07:30',
    '07:45',
    '08:00',
    '08:15',
    '08:30',
    '08:45',
    '09:00',
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
    '12:00',
    '12:15',
    '12:30',
    '12:45',
    '13:00',
    '13:15',
    '13:30',
    '13:45',
    '14:00',
    '14:15',
    '14:30',
    '14:45',
    '15:00',
    '15:15',
    '15:30',
    '15:45',
    '16:00',
    '16:15',
    '16:30',
    '16:45',
    '17:00',
    '17:15',
    '17:30',
    '17:45',
    '18:00',
    '18:15',
    '18:30',
    '18:45',
    '19:00',
    '19:15',
    '19:30',
    '19:45',
    '20:00',
    '20:15',
    '20:30',
    '20:45',
    '21:00',
    '21:15',
    '21:30',
    '21:45',
    '22:00',
    '22:15',
    '22:30',
    '22:45',
    '23:00',
    '23:15',
    '23:30',
    '23:45',
  ];

  loading = false;
  selected!: Date;
  doctors!: Doctor[];
  dateConsults!: Consult[];
  selectDoctorId!: Number;
  hoursWSchedule: agendTable[] = [];
  selectedDoctor!: Doctor;
  availableHours: string[] = [];
  myControl = new FormControl('');
  consultsCouter!: number;

  constructor(
    private doctorService: DoctorService,
    private cService: ConsultService,
    private dialog: MatDialog,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {
     this.selected = new Date();
     this.doctorService.findAllDoctors().subscribe((res) => {
        this.doctors = res;
     });
  }

  doctorSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedDoctor = event.option.value;
    const inputElement = document.getElementById('selected-doctor-input') as HTMLInputElement;
    inputElement.value = this.selectDoctor(this.selectedDoctor);
  }

  selectDoctor(doctor: Doctor) {
    this.loading = true;
    this.selectedDoctor = doctor
    this.selectDoctorId = doctor.id;
    var start = doctor.startWork;
    var stop = doctor.stopWork;

    this.pushTime(start, stop, doctor);
    
    return doctor ? `${doctor.firstName} ${doctor.lastName}` : '';
  }

  pushTime(start: string, stop: string, doctor: Doctor) {
    var startH =  this.hours.indexOf(start);
    var startS = this.hours.indexOf(stop);
    var tamanho = 0;
    this.dateConsults = []
    this.cService.scheduleSearch(doctor.id, this.formatDate()).subscribe({
      next: (res) => {
        if(!!res?.length) {
          tamanho = res.length
          for(var i=0; i<res.length;i++) {
            this.dateConsults.push(res[i])
          }
        }
        this.buildAgend(startH, startS, tamanho);
      }
    });
    
  }

  buildAgend(start: number, stop: number, tamanho: number) {
    var c = 0;
    this.hoursWSchedule = []
    for(var i = start; i<=stop; i++) {
      var aux = new agendTable();
      aux.hour = this.hours[i];
      if(tamanho > 0 && c < tamanho) {
        if(this.dateConsults[c].time == aux.hour) {
          aux.pacientName = this.dateConsults[c].pacientName
          aux.phone = this.dateConsults[c].pacientPhone
          aux.status = this.dateConsults[c].situation
          c++;
        }
      }
      this.hoursWSchedule.push(aux)
    }
    this.loading = false;
  }

  newSchedule(time: string, pName: string) {
    if(pName == "") {
      this.dialog.open(DialogNewScheduleComponent,{
      width: '30vw',
      height: '60vh',
      data: [time, this.selectedDoctor, this.formatDate()]
      })
    } else {
      this.toast.info({detail: 'Horário já possui um agendamento!'})
    }
  }

  formatDate() {
    var dateFormatted;
    var year = this.selected.getFullYear();
    var month:any = this.selected.getMonth()+1;
    var day:any = this.selected.getDate();

    if(month<=9) {
      month = "0" + month
    }
    if(day<=9) {
      day = "0" + day;
    }

    dateFormatted = year + "-" + month + "-" + day;

    return dateFormatted;
  }

}
