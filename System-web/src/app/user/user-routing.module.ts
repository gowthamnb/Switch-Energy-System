import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserNavComponent } from './components/user-nav/user-nav.component';
import { SmartMeterComponent } from './components/smart-meter/smart-meter.component';
import { BillComponent } from './components/bill/bill.component';
import { ProviderComponent } from './components/provider/provider.component';
import { RateComponent } from './components/rate/rate.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: 'smart-meter', pathMatch: 'full' },
  { path: 'user-nav', component: UserNavComponent },
  { path: 'smart-meter', component: SmartMeterComponent },
  { path: 'bills', component: BillComponent },
  { path: 'provider', component: ProviderComponent },
  { path: 'rates', component: RateComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
