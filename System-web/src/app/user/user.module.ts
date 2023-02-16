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

import { UserComponent } from './user.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { SmartMeterComponent } from './components/smart-meter/smart-meter.component';
import { BillComponent } from './components/bill/bill.component';
import { ProviderComponent } from './components/provider/provider.component';
import { HeaderComponent } from './components/header/header.component';
import { PayComponent } from './components/pay/pay.component';
import { EnrollSmartMeterDialogBoxComponent } from '../user/components/enroll-smart-meter-dialog-box/enroll-smart-meter-dialog-box.component';
import { SwitchProviderBottomSheetComponent } from '../user/components/switch-provider-bottom-sheet/switch-provider-bottom-sheet.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UserNavComponent,
    SmartMeterComponent,
    BillComponent,
    ProviderComponent,
    HeaderComponent,
    PayComponent,
    EnrollSmartMeterDialogBoxComponent,
    SwitchProviderBottomSheetComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
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
    MatSelectModule 
  ]
})
export class UserModule { }
