import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Consult } from 'src/app/models/consult/consult.model';
import { PatientRecord } from 'src/app/models/patient/patientRecord.model';
import { PatientService } from 'src/app/services/patient/patient.service';


@Component({
  selector: 'app-record-patient',
  templateUrl: './record-patient.component.html',
  styleUrls: ['./record-patient.component.css']
})
export class RecordPatientComponent implements OnInit, AfterViewInit {

  id: any;
  patient!: PatientRecord | undefined;
  consults = new MatTableDataSource<Consult>;
  displayedColumns: string[] = ['codigo', 'medico', 'data', 'hora'];

   @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(  
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) { }

   ngAfterViewInit() {
    this.consults.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.patientService.findPatientById(this.id).subscribe((res) => {
      this.patient = res;
      this.consults.data = this.patient.consults;
    });
  }

}
