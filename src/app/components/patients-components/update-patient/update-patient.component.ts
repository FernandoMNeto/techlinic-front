import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { PatientRecord } from 'src/app/models/patient/patientRecord.model';
import { PatientService } from 'src/app/services/patient/patient.service';
import { CepService } from 'src/app/services/viaCep/cep.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  updateForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public patient: PatientRecord,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private cepService: CepService,
    private toast: NgToastService,
    private pService: PatientService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
    
  createForm() {
    this.updateForm = this.formBuilder.group({
      firstName: [this.patient.firstName],
      lastName: [this.patient.lastName],
      bornDate: [this.patient.bornAt],
      cpf: [this.patient.cpf],
      phone: [this.patient.contact.phone],
      email: [this.patient.contact.email],
      cep: [this.patient.address.cep],
      city: [this.patient.address.city],
      street: [this.patient.address.street],
      state: [this.patient.address.state],
      district: [this.patient.address.district],
      number: [this.patient.address.number],
      complement: [this.patient.address.complement]
    });
  }

  findCep() {
    this.cepService.findCep(this.updateForm.value.cep).subscribe({
     next: (cepData: any) => {
       if(cepData.localidade == null) {
         this.toast.error({detail: "CEP inválido!"});
       }else {
         this.fillCepInfo(cepData)
       }
     },
     error: () => {
       this.toast.error({detail: "CEP inválido!"});
     }
    })
   }

   fillCepInfo(cepData: any) {
    this.updateForm.setValue({
        firstName: this.updateForm.value.firstName,
        lastName: this.updateForm.value.lastName,
        cpf: this.updateForm.value.cpf,
        bornDate: this.updateForm.value.bornDate,
        phone: this.updateForm.value.phone,
        cep: this.updateForm.value.cep,
        email: this.updateForm.value.email,
        city: cepData.localidade, 
        street: cepData.logradouro,
        number: this.updateForm.value.number,
        district: cepData.bairro,
        state: cepData.uf,
        complement: cepData.complemento
      })
  }

  submitForm() {
    this.pService.updatePatient(this.updateForm.value, this.patient.id);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
