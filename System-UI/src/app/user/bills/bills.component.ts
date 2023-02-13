import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  SmartMeters: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
