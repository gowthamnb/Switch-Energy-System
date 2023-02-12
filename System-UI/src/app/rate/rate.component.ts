import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

interface Provider {
  providerName: string;
}


@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  providers: Provider[] = [
    {providerName: 'Dr Evils Energy'},
    {providerName: 'The Blue Eco'},
    {providerName: 'Power for All'},
  ];


  checkRates = new FormGroup({
    provider_name: new FormControl(this.providers[0], Validators.required)
  });

  checkRate(providerName: Object) {
    console.log(providerName);
  }
}
