import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SideNavComponent } from './user/side-nav/side-nav.component';
import { UserModule } from './user/user.module';
import { LogInComponent } from './log-in/log-in.component';
import { EnrollSwitchMeterComponent } from './user/enroll-switch-meter/enroll-switch-meter.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BillsComponent } from './user/bills/bills.component';
import { ProviderComponent } from './user/provider/provider.component';
import { RateComponent } from './user/rate/rate.component';
import { HeaderComponent } from './user/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SideNavComponent,
    LogInComponent,
    EnrollSwitchMeterComponent,
    HomePageComponent,
    BillsComponent,
    ProviderComponent,
    RateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule, 
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
