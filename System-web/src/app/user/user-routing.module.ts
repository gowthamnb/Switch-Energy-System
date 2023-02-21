import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartMeterComponent } from './components/smart-meter/smart-meter.component';
import { BillComponent } from './components/bill/bill.component';
import { ProviderComponent } from './components/provider/provider.component';
import { PayComponent } from './components/pay/pay.component';

const routes: Routes = [
  { path: '', redirectTo: 'smart-meters', pathMatch: 'full' },
  { path: 'smart-meters', component: SmartMeterComponent },
  { path: 'bills', component: BillComponent },
  { path: 'providers', component: ProviderComponent },
  { path: 'payment', component: PayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
