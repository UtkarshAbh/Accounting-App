import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    userId: '',
    password: ''
  }
  constructor(private _router: Router) { localStorage.clear() }

  ngOnInit(): void {
  }

  submitButtonOptions = {
    text: "Login",
    useSubmitBehavior: true
  }

  handleSubmit(e: any) {
    e.preventDefault();
    console.log(this.user);
    localStorage.setItem('token','eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJVdGthcnNoIiwiVXNlcm5hbWUiOiJ1dGthcnNoIiwiZXhwIjoxNjUxMDcyNTE1LCJpYXQiOjE2NDgzOTQxMTV9.mVVmBbU6FltN1KSwCo9I-81rItYPev0XVV-QzFb4dF0')
    
    if (this.user.userId == 'utkarsh@gmail.com' && this.user.password == 'utkarsh#123'){ 
      localStorage.setItem('userType', 'admin');
      alert("Login Successful")
    } else {
      localStorage.setItem('userType', 'guest');
      alert("Logged in as guest")
      this.user = {
        userId: '',
        password: ''
      }
    }
    this._router.navigate(['home'])
  }

}
