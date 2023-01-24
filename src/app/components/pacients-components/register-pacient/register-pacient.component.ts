import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pacient } from 'src/app/models/pacient/pacient.model';
import { PacientService } from 'src/app/services/pacient/pacient.service';

@Component({
  selector: 'app-register-pacient',
  templateUrl: './register-pacient.component.html',
  styleUrls: ['./register-pacient.component.css']
})
export class RegisterPacientComponent implements OnInit {

  pacientForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pacientService: PacientService
  ) { }

  ngOnInit(): void {
    this.createForm(new Pacient)
  }

  createForm(pacient: Pacient) {
    this.pacientForm = this.formBuilder.group({
      firstName: [pacient.firstName],
      lastName: [pacient.lastName],
      cpf: [pacient.cpf],
      bornDate: [pacient.bornDate],
      phone: [pacient.phone],
      email: [pacient.email],
      cep: [pacient.cep],
      street: [pacient.street],
      city: [pacient.city],
      state: [pacient.state],
      number: [pacient.number],
      complement: [pacient.complement]
    })
  }

  submit() {
    this.pacientService.registerPacient(this.pacientForm.value)
  }

}
