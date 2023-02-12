import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

interface Provider {
  providerName: string;
}

@Component({
  selector: 'app-enroll-switch-meter',
  templateUrl: './enroll-switch-meter.component.html',
  styleUrls: ['./enroll-switch-meter.component.css']
})
export class EnrollSwitchMeterComponent implements OnInit {

  constructor(private router: Router) { }

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

  enrollSwitchMeter(providerName: Object) {
    console.log(providerName);
  }

}
