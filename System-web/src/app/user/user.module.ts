import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { SmartMeterComponent } from './components/smart-meter/smart-meter.component';
import { BillComponent } from './components/bill/bill.component';
import { ProviderComponent } from './components/provider/provider.component';
import { RateComponent } from './components/rate/rate.component';
import { HeaderComponent } from './components/header/header.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UserNavComponent,
    SmartMeterComponent,
    BillComponent,
    ProviderComponent,
    RateComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
  ]
})
export class UserModule { }
