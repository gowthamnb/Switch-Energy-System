import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SmartMeter } from 'src/app/interfaces/smartMeter';
import { SmartMeterService } from 'src/app/services/smart-meter.service';
import { ShowSmartMeterRequestsComponent } from '../show-smart-meter-requests/show-smart-meter-requests.component';

@Component({
  selector: 'app-smart-meter',
  templateUrl: './smart-meter.component.html',
  styleUrls: ['./smart-meter.component.css']
})
export class SmartMeterComponent implements OnInit {

  smartMeters: SmartMeter[] = [];

  constructor(private smartMeterService: SmartMeterService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.smartMeterService.getAllSmartMeters().subscribe(res => {
      this.smartMeters = res
      console.log(this.smartMeters)
    });
  }

  showRequests() {
    const dialogRef = this.dialog.open(ShowSmartMeterRequestsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  }


