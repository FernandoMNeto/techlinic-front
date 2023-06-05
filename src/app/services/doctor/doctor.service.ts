import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from 'src/app/models/doctor/doctor.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl = environment.baseUrl + 'doctors';

  constructor(
    private http: HttpClient,
  ) { }

  findAllDoctors() {
    return this.http.get<Doctor[]>(`${this.baseUrl}`);
  }
}
