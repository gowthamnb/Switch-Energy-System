import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { AdminComponent } from '../admin/admin.component';
import { AdminNavComponent } from '../admin/components/admin-nav/admin-nav.component';
import { ProviderComponent } from '../admin/components/provider/provider.component';
import { SmartMeterComponent } from '../admin/components/smart-meter/smart-meter.component';
import { HeaderComponent } from './components/header/header.component';
import { EnrollProviderDialogBoxComponent } from './components/enroll-provider-dialog-box/enroll-provider-dialog-box.component';
import { ShowSmartMeterRequestsComponent } from './components/show-smart-meter-requests/show-smart-meter-requests.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminNavComponent,
    ProviderComponent,
    SmartMeterComponent,
    HeaderComponent,
    EnrollProviderDialogBoxComponent,
    ShowSmartMeterRequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatBottomSheetModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
