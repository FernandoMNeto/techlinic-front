import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Patient } from 'src/app/models/patient/patient.model';
import { PatientService } from 'src/app/services/patient/patient.service';
import { CepService } from 'src/app/services/viaCep/cep.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit { 

  patientForm!: FormGroup; 
  loading = false;
  sex = ['MASCULINO', 'FEMININO']
 
  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private cepService: CepService,
    private toast: NgToastService
  ) { } 
  ngOnInit(): void {
    this.createForm(new Patient)
  }

  createForm(patient: Patient) {
    this.patientForm = this.formBuilder.group({
      firstName: [patient.firstName, Validators.required],
      lastName: [patient.lastName, Validators.required],
      cpf: [patient.cpf, Validators.required],
      bornDate: [patient.bornDate, Validators.required],
      phone: [patient.phone, Validators.required],
      email: [patient.email, Validators.required],
      cep: [patient.cep, Validators.required],
      district: [patient.district, Validators.required],
      street: [patient.street, Validators.required],
      city: [patient.city, Validators.required],
      state: [patient.state, Validators.required],
      number: [patient.number, [Validators.required, Validators.maxLength(4)]],
      complement: [patient.complement]
    })
  }

  findCep() {
  this.loading = true;
   this.cepService.findCep(this.patientForm.value.cep).subscribe({
    next: (cepData: any) => {
      if(cepData.localidade == null) {
        this.toast.error({detail: "CEP inválido!"});
      }else {
        this.fillCepInfo(cepData)
      }
      this.loading = false;
    },
    error: () => {
      this.toast.error({detail: "CEP inválido!"});
      this.clearCepInfo();
      this.loading = false;
    }
   })
  }

  fillCepInfo(cepData: any) {
    this.patientForm.setValue({
        firstName: this.patientForm.value.firstName,
        lastName: this.patientForm.value.lastName,
        cpf: this.patientForm.value.cpf,
        bornDate: this.patientForm.value.bornDate,
        phone: this.patientForm.value.phone,
        cep: this.patientForm.value.cep,
        email: this.patientForm.value.email,
        city: cepData.localidade, 
        street: cepData.logradouro,
        number: this.patientForm.value.number,
        district: cepData.bairro,
        state: cepData.uf,
        complement: cepData.complemento
      })
  }

  clearCepInfo() {
    this.patientForm.setValue({
      firstName: this.patientForm.value.firstName,
      lastName: this.patientForm.value.lastName,
      cpf: this.patientForm.value.cpf,
      bornDate: this.patientForm.value.bornDate,
      phone: this.patientForm.value.phone,
      cep: this.patientForm.value.cep,
      email: this.patientForm.value.email,
      city: '',
      street: '',
      number: this.patientForm.value.number,
      district: '',
      state: '',
      complement: ''
    })
  }

  submit() {
    if(this.patientForm.value('sex') == 'MASCULINO') {
      console.log('masculino')
    }else if(this.patientForm.value('sex') == 'FEMININO') {
      console.log('feminino')
    }
    this.patientService.registerPatient(this.patientForm.value);
  }

}
