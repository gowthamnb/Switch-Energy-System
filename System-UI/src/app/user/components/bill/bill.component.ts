import { Component, OnInit } from '@angular/core';
import { BillsService } from 'src/app/services/bills.service';
import { ProviderService } from 'src/app/services/provider.service';
import { SmartMeterService } from 'src/app/services/smart-meter.service';
import { SmartMeter } from 'src/app/interfaces/smartMeter';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private billsService: BillsService, private smartMeterService: SmartMeterService, private providerService: ProviderService) { }

  smartMeters: SmartMeter[] = [];

  ngOnInit(): void {
    this.smartMeterService.getSmartMeters(sessionStorage.getItem('username')).subscribe(res => {
      this.smartMeters = res;
    });

  }

  getBill(smartMeterId: string | null | undefined): void {

    this.billsService.chargedBills(smartMeterId).subscribe(res => {
      alert("Bill Amount is " + res)
    })
  }

}