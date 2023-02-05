import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PatientRecord } from 'src/app/models/patient/patientRecord.model';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})

export class AllPatientsComponent implements OnInit, AfterViewInit {

  patients =  new MatTableDataSource<PatientRecord>;
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'opcoes'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private PatientService: PatientService
  ) {}
  

  ngAfterViewInit() {
    this.patients.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.PatientService.findAllPatients().subscribe((res) => {
      this.patients.data = res;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.patients.filter = filterValue.trim().toLowerCase();
  }

}






