import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SmartMeterService } from './../../smart-meter.service';
import Swal from 'sweetalert2';

interface Provider {
  providerName: string;
}

@Component({
  selector: 'app-enroll-switch-meter',
  templateUrl: './enroll-switch-meter.component.html',
  styleUrls: ['./enroll-switch-meter.component.css']
})
export class EnrollSwitchMeterComponent implements OnInit {

  constructor(private router: Router, private smartMeterService: SmartMeterService) { }

  ngOnInit(): void {
  }

  providers: Provider[] = [
    {providerName: 'Dr Evils Energy'},
    {providerName: 'The Blue Eco'},
    {providerName: 'Power for All'},
  ];


  switchMeter = new FormGroup({
    provider_name: new FormControl(this.providers[0], Validators.required)
  });

  enrollSwitchMeter() {
    console.log(this.switchMeter.value);
    Swal.fire({
      title: 'Do you want to Signup?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Signup',
      denyButtonText: `Login`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.smartMeterService.signUp(this.signUpForm.value).subscribe();
        Swal.fire('User Signed up', 'You can Login now!!', 'success').then(result => {
          if (result.value) 
            this.router.navigate(['login']);
        });
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
  }
}
