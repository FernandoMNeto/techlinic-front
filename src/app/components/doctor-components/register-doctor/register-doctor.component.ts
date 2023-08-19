import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Doctor } from 'src/app/models/doctor/doctor.model';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { CepService } from 'src/app/services/viaCep/cep.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {

  doctorForm!: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService,
    private toast: NgToastService,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.createForm(new Doctor)
  }

  createForm(doctor: Doctor) {
    this.doctorForm = this.formBuilder.group({
      firstName: [doctor.firstName, [Validators.required]],
      lastName: [doctor.lastName, [Validators.required]],
      cpf: [doctor.cpf, [Validators.required]],
      crm: [doctor.crm, [Validators.required]],
      bornDate: [doctor.bornDate, [Validators.required]],
      phone: [doctor.phone, [Validators.required]],
      startWork: [doctor.startWork, [Validators.required]],
      stopWork: [doctor.stopWork, [Validators.required]],
      username: [doctor.username, [Validators.required]],
      password: [doctor.password, [Validators.required]],
      consultValue: [doctor.consultValue, [Validators.required]],
      email: [doctor.email, [Validators.required]],
      cep: [doctor.cep, [Validators.required]],
      district: [doctor.district, [Validators.required]],
      street: [doctor.street, [Validators.required]],
      city: [doctor.city, [Validators.required]],
      state: [doctor.state, [Validators.required]],
      number: [doctor.number, [Validators.required]],
      complement: [doctor.complement]
    })
  }

  findCep() {
    this.loading = true;
     this.cepService.findCep(this.doctorForm.value.cep).subscribe({
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
        this.loading = false;
        this.clearCepInfo();
        this.loading = false;
      }
     })
    }

    fillCepInfo(cepData: any) {
      this.doctorForm.setValue({
          firstName: this.doctorForm.value.firstName,
          lastName: this.doctorForm.value.lastName,
          cpf: this.doctorForm.value.cpf,
          username: this.doctorForm.value.username,
          password: this.doctorForm.value.password,
          crm: this.doctorForm.value.crm,
          startWork: this.doctorForm.value.startWork,
          stopWork: this.doctorForm.value.stopWork,
          consultValue: this.doctorForm.value.consultValue,
          bornDate: this.doctorForm.value.bornDate,
          phone: this.doctorForm.value.phone,
          cep: this.doctorForm.value.cep,
          email: this.doctorForm.value.email,
          city: cepData.localidade, 
          street: cepData.logradouro,
          number: this.doctorForm.value.number,
          district: cepData.bairro,
          state: cepData.uf,
          complement: cepData.complemento
        })
    }
  
    clearCepInfo() {
      this.doctorForm.setValue({
        firstName: this.doctorForm.value.firstName,
        lastName: this.doctorForm.value.lastName,
        username: this.doctorForm.value.username,
        password: this.doctorForm.value.password,
        cpf: this.doctorForm.value.cpf,
        crm: this.doctorForm.value.crm,
        bornDate: this.doctorForm.value.bornDate,
        phone: this.doctorForm.value.phone,
        cep: this.doctorForm.value.cep,
        email: this.doctorForm.value.email,
        consultValue: this.doctorForm.value.consultValue,
        city: '',
        street: '',
        number: this.doctorForm.value.number,
        district: '',
        state: '',
        complement: ''
      })
    }

  submit() {
    this.doctorService.registerDoctor(this.doctorForm.value);
  }
}
