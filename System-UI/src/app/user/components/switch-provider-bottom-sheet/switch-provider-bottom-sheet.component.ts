import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { Provider } from 'src/app/interfaces/provider';
import { ProviderService } from 'src/app/services/provider.service';
import { SmartMeterService } from 'src/app/services/smart-meter.service';

@Component({
  selector: 'app-switch-provider-bottom-sheet',
  templateUrl: './switch-provider-bottom-sheet.component.html',
  styleUrls: ['./switch-provider-bottom-sheet.component.css']
})
export class SwitchProviderBottomSheetComponent implements OnInit {

  providers: Provider[] = [];
  smartMeterId = this.data;
  selectedSmartMeterProvider: Provider = {
    id: '',
    name: '',
    rate: 0,
    isEnabled: ''
  };

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: string, private _bottomSheetRef: MatBottomSheetRef<SwitchProviderBottomSheetComponent>,
    private providerService: ProviderService, private smartMeterService: SmartMeterService) { }

  ngOnInit(): void {
    this.providerService.getAllProviders().subscribe(res => {
      this.providers = res;
    });
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  switchProvider(): void {
    this.smartMeterService.switchProvider(this.smartMeterId, this.selectedSmartMeterProvider).subscribe();
    this._bottomSheetRef.dismiss();
  }

}
