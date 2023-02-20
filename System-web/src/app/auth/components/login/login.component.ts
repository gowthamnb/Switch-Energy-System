import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  logIn(logInData: Object) {
    this.userService.login(this.loginForm.value).subscribe(res => {
      // if(logInData. == 'Admin')
      //  this.router.navigate(['/admin/smart-meters']);
      // else
      // this.router.navigate(['/user/smart-meters']);

    });
   
  }

}
