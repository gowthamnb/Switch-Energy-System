import { Component, OnInit, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
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
    isEnabled: ''
  };

  constructor(public dialogRef: MatDialogRef<EnrollSmartMeterDialogBoxComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Provider, 
    private providerService: ProviderService, private smartMeterService: SmartMeterService) {}

  ngOnInit(): void {
    this.providerService.getAllProviders().subscribe(res => {
      this.providers = res;
  });
}

smartMeterForm =  new FormGroup({
  // userId: new FormControl('', Validators.required),
  providerName: new FormControl('', Validators.required),
});


enrollSmartMeter() {
  // console.log(this.smartMeterForm)
  // this.smartMeterService.enrollSmartMeter('gowthamnb21@gmail.com', this.newSmartMeterProvider).subscribe();
  this.smartMeterService.enrollSmartMeter(sessionStorage.getItem('username'), this.smartMeterForm.value.providerName).subscribe();
}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
