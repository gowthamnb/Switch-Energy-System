import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<string>();

  logInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  logIn(logInData: Object) {
    this.newItemEvent.emit("true");
    // this.router.navigate(['user']);

    this.router.navigate(['enroll-switch-meter']);
  }

}
