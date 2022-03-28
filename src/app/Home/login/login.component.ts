import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user.model';
import { UserCredentialsService } from 'src/app/Services/user-credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [{
    userId: '',
    password: '',
    userType: ''
  }]

  user: User = {
    userId: '',
    password: '',
    userType: ''
  }
  constructor(private _router: Router,
              private _userCred: UserCredentialsService) { localStorage.clear() }

  ngOnInit(): void {
   this._userCred.getUsers().subscribe( users => {
     this.users = users
   });
  }

  submitButtonOptions = {
    text: "Login",
    useSubmitBehavior: true
  }

  handleSubmit(e: any) {
    e.preventDefault();
    console.log(this.users);
    localStorage.setItem('token','eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJVdGthcnNoIiwiVXNlcm5hbWUiOiJ1dGthcnNoIiwiZXhwIjoxNjUxMDcyNTE1LCJpYXQiOjE2NDgzOTQxMTV9.mVVmBbU6FltN1KSwCo9I-81rItYPev0XVV-QzFb4dF0')
    
    const _userfound = this.users.find(user => user.userId === this.user.userId)
    
    if (_userfound && _userfound.password === this.user.password){ 
      localStorage.setItem('userType', _userfound.userType);
      if(_userfound.userType === 'admin'){
        alert("Admin Login Successfull")
      } else {
        alert("Guest Login Succefull")
      }
    } else {
      localStorage.clear()
      alert("Invalid Credetials")
      this.user = {
        userId: '',
        password: '',
        userType: ''
      }
    }
    this._router.navigate(['home'])
  }

}
