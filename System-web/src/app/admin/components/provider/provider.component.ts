import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/interfaces/provider';
import { ProviderService } from 'src/app/services/provider.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

import { EnrollProviderDialogBoxComponent } from '../enroll-provider-dialog-box/enroll-provider-dialog-box.component';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  providers: Provider[] = []; 
  newProvider: Provider = {
    id: '',
    name: '',
    rate: 0,
    status: ''
  };

  constructor(private providerService: ProviderService, private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.providerService.getAllProviders().subscribe(res => {
      this.providers = res;
    });
  }

  enrollProvider(): void {
    const dialogRef = this.dialog.open(EnrollProviderDialogBoxComponent, {
      data: {name: this.newProvider.name, rate: this.newProvider.rate},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newProvider = result;
      this.ngOnInit();
    });
    
  }

}
