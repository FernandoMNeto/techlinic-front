import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PatientRecord } from 'src/app/models/patient/patientRecord.model';
import { PatientService } from 'src/app/services/patient/patient.service';
import { UpdatePatientComponent } from '../update-patient/update-patient.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})

export class AllPatientsComponent implements OnInit, AfterViewInit {

  patients = new MatTableDataSource<PatientRecord>;
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'opcoes'];
  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private PatientService: PatientService,
    private router: Router
  ) { }


  ngAfterViewInit() {
    this.patients.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.loading = true;
    this.PatientService.findAllPatients().subscribe((res) => {
      this.patients.data = res;
      this.loading = false;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.patients.filter = filterValue.trim().toLowerCase();
  }

  updatePatient(id: string) {
    this.dialog.open(UpdatePatientComponent, {
      data: id,
      width: '90vw',
      height: '80vh'
    })
  }

  viewPatient(id: string) {
    this.router.navigate([`/record/${id}`]);
  }

  sortPatientByFirstName() {
    this.patients.data = this.patients.data.sort(function(a, b) {
      const fistOne = a.firstName.toLowerCase();
      const secondOne = b.firstName.toLowerCase();

      if(fistOne > secondOne) {
        return 1
      }
      if(fistOne < secondOne) {
        return -1
      }
      return 0
    })
  }

}






