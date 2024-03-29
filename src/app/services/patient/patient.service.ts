import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { PatientRecord } from 'src/app/models/patient/patientRecord.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrl = environment.baseUrl + 'pacients';

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService,
    private dialog: MatDialog,
  ) { }

  registerPatient(patient: any) {
    this.http.post<PatientRecord>(this.baseUrl + '/register',{
      observer: 'response',
      "cpf": patient.cpf,
      "firstName": patient.firstName,
      "lastName": patient.lastName,
      "bornAt": patient.bornAt,
      "contact": {
        "email": patient.email,
        "phone": patient.phone
      },
      "address": {
        "cep": patient.cep,
        "street": patient.street,
        "district": patient.district,
        "city": patient.city,
        "state": patient.state,
        "number": patient.number,
        "complement": patient.complement
      },
    }).subscribe({
      next: (response) => {
        this.router.navigate([`/record/${response.id}`])
        this.toast.success({detail: "Paciente cadastrado com sucesso!"});
      },
      error: (erro) => {
        this.toast.error({detail: "Não foi possível cadastrar o paciente!", summary: erro})
      }
    })
  }

  updatePatient(patient: any, id: any) {
    console.log(patient);
    console.log(id);
    this.http.put(this.baseUrl + `/update/${id}`,{
      "cpf": patient.cpf,
      "firstName": patient.firstName,
      "lastName": patient.lastName,
      "bornAt": patient.bornAt,
      "contact": {
        "email": patient.email,
        "phone": patient.phone
      },
      "address": {
        "cep": patient.cep,
        "street": patient.street,
        "district": patient.district,
        "city": patient.city,
        "state": patient.state,
        "number": patient.number,
        "complement": patient.complement
      },
    }).subscribe({
      next: (response) => {
        this.dialog.closeAll();
        window.location.reload();
        this.toast.success({detail: "Paciente atualizado com sucesso!"});
      },
      error: (erro) => {
        this.toast.error({detail: "Não foi possível atualizar o paciente!", summary: erro[0]})
      }
    })
  }

  findPatientByCPF(cpf: string) {
    this.http.get(this.baseUrl + '/find', { 
      params: {cpf: cpf}
    }).subscribe({
      next: (res: any) => {
        this.router.navigate(['/record/' + res.id]);
      },
      error: (erro) => {
        const cpfFormatted = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
        this.toast.error({detail: `Paciente não cadastrado com o CPF: ${cpfFormatted}`});
      } 
    });
  } 

  findPatientById(id: string) {
    return this.http.get<PatientRecord>(`${this.baseUrl}/${id}`);
  }

  findAllPatients() {
    return this.http.get<PatientRecord[]>(`${this.baseUrl}`);
  }

} 




