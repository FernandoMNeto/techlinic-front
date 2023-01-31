import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  baseUrl = environment.baseUrl + 'pacients';

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService
  ) { }

  registerPacient(pacient: any) {
    this.http.post(this.baseUrl + '/register', {
      "cpf": pacient.cpf,
      "firstName": pacient.firstName,
      "lastName": pacient.lastName,

      "bornAt": pacient.bornDate,
      "contact": {
        "email": pacient.email,
        "phone": pacient.phone
      },
      "address": {
        "cep": pacient.cep,
        "street": pacient.street,
        "district": pacient.district,
        "city": pacient.city,
        "state": pacient.state,
        "number": pacient.number,
        "complement": pacient.complement
      },
    }).subscribe({
      next: (res) => {
        this.toast.success({detail: "Paciente cadastrado com sucesso!"});
      },
      error: (erro) => {
        this.toast.error({detail: "Não foi possível cadastrar o paciente!", summary: erro.error})
      }
    })
  }

  findPacientByCPF(cpf: string) {
    this.http.get(this.baseUrl + '/find', { 
      params: {cpf: cpf}
    }).subscribe({
      next: (res: any) => {
        this.router.navigate(['/record/' + res.id]);
      },
      error: (erro) => {
        const cpfFormatted = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
        this.toast.error({detail: `Paciente não cadastrado com o CPF: ${cpfFormatted}`});
      } // 
    });
    
  }

}




