import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SmartMeter } from 'src/app/interfaces/smartMeter';

@Component({
  selector: 'app-smart-meter',
  templateUrl: './smart-meter.component.html',
  styleUrls: ['./smart-meter.component.css']
})
export class SmartMeterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnsHeaders: string[] = ['#Id', 'Provider', 'Status', 'Switch Provider']
  smartMeters: SmartMeter[] = [];
  dataSource = [this.smartMeters];

  // @ViewChild(MatTable)
  // table: MatTable<SmartMeter>;

  enroll() {

  }


}
