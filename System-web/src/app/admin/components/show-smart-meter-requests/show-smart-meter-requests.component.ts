import { Component, OnInit } from '@angular/core';
import { SmartMeter } from 'src/app/interfaces/smartMeter';
import { SmartMeterService } from 'src/app/services/smart-meter.service';

@Component({
  selector: 'app-show-smart-meter-requests',
  templateUrl: './show-smart-meter-requests.component.html',
  styleUrls: ['./show-smart-meter-requests.component.css']
})
export class ShowSmartMeterRequestsComponent implements OnInit {
  
  smartMeters: SmartMeter[] = [];

  constructor(private smartMeterService: SmartMeterService) { }

  ngOnInit(): void {
    this.smartMeterService.getSmartMetersRequests().subscribe(res => {
      this.smartMeters=res
    });
  }

  acceptRequest(smartMeterId: String | null | undefined): void {
    this.smartMeterService.acceptRequest(smartMeterId).subscribe();
    
  }

  declineRequest(smartMeterId: String | null | undefined) {
    this.smartMeterService.declineRequest(smartMeterId).subscribe();
  }

}
