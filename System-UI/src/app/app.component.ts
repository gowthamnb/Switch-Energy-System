import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'System-UI';

  status: String = 'false';
  // rootStatus: String = 'false';

  logIn(newItem: string) {
    console.log(newItem);
    this.status = newItem;
  }
}
