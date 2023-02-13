import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'System-UI';

  status: String = 'false';
  // rootStatus: String = 'false';

  logIn(newItem: string) {
    this.status = newItem;
  }
}
