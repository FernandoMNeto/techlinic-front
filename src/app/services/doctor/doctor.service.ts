import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Doctor } from 'src/app/models/doctor/doctor.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl = environment.baseUrl + 'doctors';

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService
  ) { }

  findAllDoctors() {
    return this.http.get<Doctor[]>(`${this.baseUrl}`);
  }

  registerDoctor(doctor: any) {
    this.http.post<Doctor>(this.baseUrl + '/register',{
      observer: 'response',
      "cpf": doctor.cpf,
      "firstName": doctor.firstName,
      "lastName": doctor.lastName,
      "startWork": doctor.startWork,
      "stopWork": doctor.stopWork,
      "consultValue": doctor.consultValue,
      "crm": doctor.crm,
      "bornAt": doctor.bornDate,
      "contact": {
        "email": doctor.email,
        "phone": doctor.phone
      },
      "address": {
        "cep": doctor.cep,
        "street": doctor.street,
        "district": doctor.district,
        "city": doctor.city,
        "state": doctor.state,
        "number": doctor.number,
        "complement": doctor.complement
      },
      "userInfo": {
        "username": doctor.username,
        "password": doctor.password
      }
    }).subscribe({
      next: (response) => {
        this.toast.success({detail: "Médico cadastrado com sucesso!"});
      },
      error: (erro) => {
        this.toast.error({detail: "Não foi possível cadastrar o médico!"});
      }
    })
  }
  
}
