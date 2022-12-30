import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutheticationService } from '../services/authetication/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });
  
  constructor(
    private formBuilder: FormBuilder, 
    private autheticationService: AutheticationService
    ) { }

  ngOnInit(): void {
  }

  submit() {
    this.autheticationService.submitLogin(this.loginForm.value);
  }
}
