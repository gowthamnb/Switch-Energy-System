import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import  {MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

import { SmartMeter } from 'src/app/interfaces/smartMeter';
import { Provider } from 'src/app/interfaces/provider';
import { SmartMeterService } from 'src/app/services/smart-meter.service';
import { EnrollSmartMeterDialogBoxComponent } from '../enroll-smart-meter-dialog-box/enroll-smart-meter-dialog-box.component';
import { SwitchProviderBottomSheetComponent } from '../switch-provider-bottom-sheet/switch-provider-bottom-sheet.component';


@Component({
  selector: 'app-smart-meter',
  templateUrl: './smart-meter.component.html',
  styleUrls: ['./smart-meter.component.css']
})
export class SmartMeterComponent implements OnInit {

  constructor(private router: Router, private smartMeterService: SmartMeterService, 
    public dialog: MatDialog, private _bottomSheet: MatBottomSheet) { }

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
  })
  }

  enrollSmartMeter(): void {
    const dialogRef = this.dialog.open(EnrollSmartMeterDialogBoxComponent, {
      data: this.newSmartMeter,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newSmartMeter = result;
      this.ngOnInit();
    });
    
  }

  switchProvider(smartmeterId: string | null |undefined): void {
    const _bottomSheetRef = this._bottomSheet.open(SwitchProviderBottomSheetComponent, {
      data: smartmeterId,
    });

    _bottomSheetRef.afterDismissed().subscribe(result => {
      this.ngOnInit();
    });
  }

}
