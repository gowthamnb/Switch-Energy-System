import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartMeterComponent } from './components/smart-meter/smart-meter.component';
import { ProviderComponent } from './components/provider/provider.component';

const routes: Routes = [
  { path: '', redirectTo: 'smart-meters', pathMatch: 'full' },
  { path: 'smart-meters', component: SmartMeterComponent },
  { path: 'providers', component: ProviderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
