import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './bills/bills.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProviderComponent } from './provider/provider.component';
import { RateComponent } from './rate/rate.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EnrollSwitchMeterComponent } from './user/enroll-switch-meter/enroll-switch-meter.component';
import { SideNavComponent } from './user/side-nav/side-nav.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'user', redirectTo: 'user, enroll-switch-meter', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'enroll-switch-meter', component: EnrollSwitchMeterComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'provider', component: ProviderComponent },
  { path: 'rates', component: RateComponent },
  { path: 'user', component: SideNavComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
