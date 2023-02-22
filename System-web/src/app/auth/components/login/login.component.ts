import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Login } from 'src/app/interfaces/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  res: Login = {
    token: '',
    role: '',
    username: '',
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  logIn(logInData: Object) {

    this.userService.login(this.loginForm.value).subscribe({
      next : (res) => {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('role', res.role);
        if (res.role == 'ROLE_ADMIN') {
          this.router.navigate(['/admin/smart-meters']);
        }
        else {
          this.router.navigate(['/user']);
        }
      },
      error : (err) => {
        Swal.fire({
          title: 'Invalid login credentials!!',
          width: 400,
          padding: '3em',
          color: 'red',
          background: '#fff url()',
          backdrop: `
            rgba(0,0,0,0.3)
           
            left top
            no-repeat
          `
        })
        // alert('Invalid details!!');
      }
    })
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/auth/login'])
  }

}
