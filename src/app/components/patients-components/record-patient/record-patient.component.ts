import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consult } from 'src/app/models/consult/consult.model';
import { PatientRecord } from 'src/app/models/patient/patientRecord.model';
import { PatientService } from 'src/app/services/patient/patient.service';


@Component({
  selector: 'app-record-patient',
  templateUrl: './record-patient.component.html',
  styleUrls: ['./record-patient.component.css']
})
export class RecordPatientComponent implements OnInit {

  id: any;
  patient!: PatientRecord | undefined;
  consults!: any
  

  constructor(  
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.patientService.findPatientById(this.id).subscribe((res) => {
      this.patient = res;
      this.patient.cpf = this.patient.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
      this.patient.address.cep = this.patient.address.cep.replace(/(\d{5})(\d{3})/g, '\$1\-\$2');
      this.patient.contact.phone = this.patient.contact.phone.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');;
      this.consults = this.patient.consults
    });
  }

}
