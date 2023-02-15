import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { AdminComponent } from '../admin/admin.component';
import { AdminNavComponent } from '../admin/components/admin-nav/admin-nav.component';
import { ProviderComponent } from '../admin/components/provider/provider.component';
import { SmartMeterComponent } from '../admin/components/smart-meter/smart-meter.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminNavComponent,
    ProviderComponent,
    SmartMeterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
