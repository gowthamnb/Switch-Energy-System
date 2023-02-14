import { Component, OnInit } from '@angular/core';
import { SmartMeter } from 'src/app/smartMeter';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  // SmartMeters: SmartMeter = [];
  displayElement = true;
  userId: String ='gow@98765';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.displayBills(this.userId);

  }
  
  // displayBills(userId: String) {
  //   this.userService.displayBills(this.userId).subscribe((response) => {
  //     this.SmartMeters = response;
  //     console.log(this.SmartMeters)
  //   });
  // }
  

}



