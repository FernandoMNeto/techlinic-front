import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CepService {


    Url = "https://viacep.com.br/ws/";

    constructor(
        private http: HttpClient,
    ) { }

    findCep(cep: String) {
        return this.http.get(this.Url + cep + "/json/");
    }

}