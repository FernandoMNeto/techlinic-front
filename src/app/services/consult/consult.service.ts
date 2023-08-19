import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { Consult } from 'src/app/models/consult/consult.model';
import { Doctor } from 'src/app/models/doctor/doctor.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {
  
  baseUrl = environment.baseUrl + 'consults';

  constructor(
    private http: HttpClient,
    private toast: NgToastService
  ) { }

  scheduleSearch(doctorId: any, date: any) {
    return this.http.get<Consult[]>(`${this.baseUrl}/date/${doctorId}/${date}`);
  }

  findConsultById(consult_id: string) {
    return this.http.get<Consult>(`${this.baseUrl}/${consult_id}`);
  }

  changeStatusToInProgress(id: string) {
    return this.http.post(`${this.baseUrl}/inprogress/${id}`, {}).subscribe({
      next: (res) => {
        this.toast.info({detail:"Atendimento iniciado com sucesso!"});
      }
    });
  }

  postSchedule(doctor: Doctor, idPSelected: String, observation: String, complaint: String, time: String, date: String) {
    return this.http.post(`${this.baseUrl}/register`, {
      "pacientId": idPSelected,
      "doctorId": doctor.id,
      "description": observation,
      "complaint": complaint,
      "time": time,
      "date": date,
      "diagnosis": "",
      "prescription": "",
    }).subscribe({
      next: (res) => {
        this.toast.success({detail: "Agendamento realizado com sucesso!"})
      },
      error: ()=> {
        this.toast.error({detail: "Não foi possível realizar o agendamento!"})
      }
    })
  }

  findNextConsults(patientId: String) {
    return this.http.get<Consult[]>(`${this.baseUrl}/next/${patientId}`)
  }

  cancelSchedule(id: string) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
  }
 
}
