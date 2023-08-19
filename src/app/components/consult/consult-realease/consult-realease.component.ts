import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Consult } from 'src/app/models/consult/consult.model';
import { ConsultService } from 'src/app/services/consult/consult.service';

@Component({
  selector: 'app-consult-realease',
  templateUrl: './consult-realease.component.html',
  styleUrls: ['./consult-realease.component.css']
})
export class ConsultRealeaseComponent implements OnInit {

  loading = false;
  consult_id!: string;
  consult!: Consult;
  form!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private cService: ConsultService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      anamnese: new FormControl('', Validators.required),
      prescription: new FormControl('', Validators.required),
      receituary: new FormControl('', Validators.required),
    })
    this.loading = true;
    this.router.params.subscribe((p) => {
      this.consult_id = p['id'];
    })
    this.changeStatusToInProgress(this.consult_id);
    this.findConsult();
    this.loading = false;
  }

  findConsult() {
    this.cService.findConsultById(this.consult_id).subscribe((res) => {
      this.consult = res;
    })
  }

  changeStatusToInProgress(id: string) {
    this.cService.changeStatusToInProgress(id);
  }



}
