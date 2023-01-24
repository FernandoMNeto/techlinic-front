import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  constructor(
    private http: HttpClient
  ) { }

  registerPacient(value: any) {
    
  }
}
