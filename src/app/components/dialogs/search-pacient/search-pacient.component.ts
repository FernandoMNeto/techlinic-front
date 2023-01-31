import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PacientService } from 'src/app/services/pacient/pacient.service';

@Component({
  selector: 'app-search-pacient',
  templateUrl: './search-pacient.component.html',
  styleUrls: ['./search-pacient.component.css']
})
export class SearchPacientComponent implements OnInit {

  cpf: string = '';

  constructor(
    private pacientService: PacientService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  findPacientByCPF(){
    this.pacientService.findPacientByCPF(this.cpf);
    this.dialog.closeAll()
  }

}
