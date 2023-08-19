import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Consult } from 'src/app/models/consult/consult.model';
import { Doctor } from 'src/app/models/doctor/doctor.model';
import { ConsultService } from 'src/app/services/consult/consult.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-daily-consults',
  templateUrl: './daily-consults.component.html',
  styleUrls: ['./daily-consults.component.css']
})
export class DailyConsultsComponent implements OnInit {

  selected = new Date();
  loading = false;
  doctors!: Doctor[];
  selectDoc!: Doctor;
  consults: Consult[] = [];

  constructor(
    private doctorService: DoctorService,
    private cService: ConsultService
  ) { }

  ngOnInit(): void {
    this.consults = []
    this.doctorService.findAllDoctors().subscribe((res) => {
      this.doctors = res;
   });
  }

  doctorSelected(event: MatAutocompleteSelectedEvent) {
    this.selectDoc = event.option.value;
    const inputElement = document.getElementById('selected-doctor-input') as HTMLInputElement;
    inputElement.value = this.selectDoctor(this.selectDoc);
  }

  selectDoctor(doctor: Doctor): string {
    this.findConsults();
    return doctor ? `${doctor.firstName} ${doctor.lastName}` : '';
  }

  findConsults() {
    this.loading = true;
    this.cService.scheduleSearch(this.selectDoc.id, this.formatDate()).subscribe(res => {
      this.consults = res;
      this.loading = false;
    })
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

  iniciarConsulta(id: number) {
    
  }
}
