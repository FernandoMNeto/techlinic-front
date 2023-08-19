import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Consult } from 'src/app/models/consult/consult.model';

@Component({
  selector: 'app-visu-consult',
  templateUrl: './visu-consult.component.html',
  styleUrls: ['./visu-consult.component.css']
})
export class VisuConsultComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Consult[],
    private dialog: MatDialog
    
    ) { }

  ngOnInit(): void {}

  close() {
    this.dialog.closeAll()
  }

}
