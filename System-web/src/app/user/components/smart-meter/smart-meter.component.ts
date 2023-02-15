import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SmartMeter } from 'src/app/interfaces/smartMeter';
import { Provider } from 'src/app/interfaces/provider';
import { SmartMeterService } from 'src/app/services/smart-meter.service';


@Component({
  selector: 'app-smart-meter',
  templateUrl: './smart-meter.component.html',
  styleUrls: ['./smart-meter.component.css']
})
export class SmartMeterComponent implements OnInit {

  constructor(private router: Router, private smartMeterService: SmartMeterService, public dialog: MatDialog) { }

  smartMeters: SmartMeter[] = [];
  provider: Provider[] = []; 
  newSmartMeter: Provider = {
    id: '',
    name: '',
    rate: 0,
    status: ''
  };

  ngOnInit(): void {
     this.smartMeterService.getSmartMeters('gowthamnb21@gmail.com').subscribe(res => {
      this.smartMeters = res;
      console.log(this.smartMeters)
  })
  }

  enrollSmartMeter(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      data: this.newSmartMeter,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newSmartMeter = result;
    });
  }

}

@Component({
  selector: 'enroll-smart-meter-dialogue',
  templateUrl: 'enroll-smart-meter-dialog.html'
})
export class DialogOverview {
  newSmartMeter: Provider = {
    id: '',
    name: '',
    rate: 0,
    status: ''
  };
  constructor(public dialogRef: MatDialogRef<DialogOverview>, 
    @Inject(MAT_DIALOG_DATA) public data: Provider,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
