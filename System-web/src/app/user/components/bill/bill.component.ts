import { Component, OnInit } from '@angular/core';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private billsService: BillsService) { }

  ngOnInit(): void {
    // this.billsService.chargedBills(sessionStorage.getItem('username')).subscribe( res => {
    //   console.log(res)
    // })
  }

}
