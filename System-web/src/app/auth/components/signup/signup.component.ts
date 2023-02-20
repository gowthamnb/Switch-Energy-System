import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private formbuilder: FormBuilder) { 

  }

  ngOnInit(): void {
  }

  password: String = '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$';

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    contactNumber: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    address: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    password: new FormControl('', Validators.compose([Validators.required, Validators.pattern(''), Validators.minLength(8)])),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('')])
  }, {
    // Validators: this.mustMatch('password', 'confirmPassword')
  });

  mustMatch(password: any, confirmPassword: any) {
    return (formGroup: FormGroup) => {
      const passwordControl=formGroup.controls[password];
      const confirmPasswordControl=formGroup.controls[confirmPassword];
      if(confirmPassword.errors && !confirmPassword.errors['mustMatch']) {
        return;
      }

      if(passwordControl.value!==confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mustMatch: true });
      }
      else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  signup(signupData: Object) {
    let resultMessage: string = '';
    Swal.fire({
      title: 'Do you want to Signup?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Signup',
      denyButtonText: `Login`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.signUp(signupData).subscribe();
        // res => {
        // resultMessage = '';
        // console.log(res);

        Swal.fire('User Signed up', 'You can Login now!!', 'success').then(result => {
          if (result.value)
            this.router.navigate(['auth/login']);
        });
        // },
        //   err => {
        //     resultMessage = err.error.error;
        //     Swal.fire(resultMessage, '', 'error').then(result => {
        //     });
        //   });
      }
      else if (result.isDenied) {
        Swal.fire('Details are not saved', 'Return to Login?', 'info').then(result => {
          if (result.value) {
            this.router.navigate(['/auth/login']);
          }
        });
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled!', 'Unable to Signup.', 'error').then(result => {
          if (result.value) {
            this.router.navigate(['/auth/signup']);
          }
        });
      }
    });
  }

  get f() {
     return this.signupForm.controls;
  }
}

