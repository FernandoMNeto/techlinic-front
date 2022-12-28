import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.loginForm.value)
  }
}
