import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../types';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  password: String = '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    contactNumber: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    address: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    password: new FormControl('', [Validators.required, Validators.pattern('')]),
    confirm_password: new FormControl('', [Validators.required, Validators.pattern('')])
  })

   

  // userDetails() {
  //   this.userService.signUp(this.signUpForm.value).subscribe();
  // }

  userDetails() {
    let resultMessage: string = '';
    Swal.fire({
      title: 'Do you want to Signup?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Signup',
      denyButtonText: `Login`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.signUp(this.signUpForm.value).subscribe();
          // res => {
          // resultMessage = '';
          // console.log(res);
          
          Swal.fire('User Signed up', 'You can Login now!!', 'success').then(result => {
            if (result.value) 
              this.router.navigate(['login']);
          });
        // },
        //   err => {
        //     resultMessage = err.error.error;
        //     Swal.fire(resultMessage, '', 'error').then(result => {
        //     });
        //   });
      }
      else if (result.isDenied) {
        Swal.fire('Details are not saved', 'Return to Login?', 'info');
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled!', 'Unable to Signup.', 'error').then(result => {
          if (result.value) {
            this.router.navigate(['signup']);
          }
        });
      }
    })

}
}
