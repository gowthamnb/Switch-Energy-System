import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

interface Gender {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Gender: Gender[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Others', viewValue: 'Others' }
  ];

  fixedGender = 'Male';

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")])
  })

  userDetails(){

  }

}
