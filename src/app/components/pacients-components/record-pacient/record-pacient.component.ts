import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientService } from 'src/app/services/pacient/pacient.service';


@Component({
  selector: 'app-record-pacient',
  templateUrl: './record-pacient.component.html',
  styleUrls: ['./record-pacient.component.css']
})
export class RecordPacientComponent implements OnInit {

  id: any;

  constructor(  
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private pacient: PacientService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

}
