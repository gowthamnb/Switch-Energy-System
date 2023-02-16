import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Provider } from 'src/app/interfaces/provider';
import { ProviderService } from 'src/app/services/provider.service';
import { SmartMeterService } from 'src/app/services/smart-meter.service';

@Component({
  selector: 'app-enroll-smart-meter-dialog-box',
  templateUrl: './enroll-smart-meter-dialog-box.component.html',
  styleUrls: ['./enroll-smart-meter-dialog-box.component.css']
})
export class EnrollSmartMeterDialogBoxComponent implements OnInit {

  providers: Provider[] = [];

  newSmartMeterProvider: Provider = {
    id: '',
    name: '',
    rate: 0,
    status: ''
  };

  constructor(public dialogRef: MatDialogRef<EnrollSmartMeterDialogBoxComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Provider, 
    private providerService: ProviderService, private smartMeterService: SmartMeterService) {}

  ngOnInit(): void {
    this.providerService.getAllProviders().subscribe(res => {
      this.providers = res;
      console.log(this.providers)
  });
}

enrollSmartMeter() {
  this.smartMeterService.enrollSmartMeter('gowthamnb21@gmail.com', this.newSmartMeterProvider).subscribe();
}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
