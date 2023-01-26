import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pacient } from 'src/app/models/pacient/pacient.model';
import { PacientService } from 'src/app/services/pacient/pacient.service';
import { CepService } from 'src/app/services/viaCep/cep.service';

@Component({
  selector: 'app-register-pacient',
  templateUrl: './register-pacient.component.html',
  styleUrls: ['./register-pacient.component.css']
})
export class RegisterPacientComponent implements OnInit {

  pacientForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pacientService: PacientService,
    private cepService: CepService
  ) { }

  ngOnInit(): void {
    this.createForm(new Pacient)
  }

  createForm(pacient: Pacient) {
    this.pacientForm = this.formBuilder.group({
      firstName: [pacient.firstName, [Validators.required]],
      lastName: [pacient.lastName, [Validators.required]],
      cpf: [pacient.cpf, [Validators.required]],
      bornDate: [pacient.bornDate, [Validators.required]],
      phone: [pacient.phone, [Validators.required]],
      email: [pacient.email, [Validators.required]],
      cep: [pacient.cep, [Validators.required]],
      district: [pacient.district, [Validators.required]],
      street: [pacient.street, [Validators.required]],
      city: [pacient.city, [Validators.required]],
      state: [pacient.state, [Validators.required]],
      number: [pacient.number, Validators.required],
      complement: [pacient.complement, Validators.required]
    })
  }

  findCep() {
   this.cepService.findCep(this.pacientForm.value.cep).subscribe({
    next: (cepData: any) => {
      this.pacientForm.setValue({
        firstName: this.pacientForm.value.firstName,
        lastName: this.pacientForm.value.lastName,
        cpf: this.pacientForm.value.cpf,
        bornDate: this.pacientForm.value.bornDate,
        phone: this.pacientForm.value.phone,
        cep: this.pacientForm.value.cep,
        email: this.pacientForm.value.email,
        city: cepData.localidade, 
        street: cepData.logradouro,
        number: this.pacientForm.value.number,
        district: cepData.bairro,
        state: cepData.uf,
        complement: cepData.complemento
      })
    }
   })
  }

  submit() {
    this.pacientService.registerPacient(this.pacientForm.value);
  }

}
