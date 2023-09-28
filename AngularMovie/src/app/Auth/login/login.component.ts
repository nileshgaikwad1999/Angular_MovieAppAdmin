import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.Service';
import { ILogin } from 'src/app/Model/ILogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: ILogin = {
    UserName: '',
    Password: '',
    isError: true,
  };
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      UserName: new FormControl('',Validators.required),
      Password: new FormControl('',Validators.required),
    });
  }
  constructor(private loginService: LoginService, private router: Router) {}
  errorMessage="";
  onSubmit() {
    this.login.UserName = this.formLogin.value.UserName;
    this.login.Password = this.formLogin.value.Password;
    this.loginService.Login(this.login).subscribe(
      (res) => {
        this.router.navigateByUrl('home');
      
      },
      (error) => {
       this.errorMessage="UserName and password wrong"
      }
    );
  }
  formLogin!: FormGroup;
}
