import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component'; 

const routes: Routes = [
  { path:'', redirectTo:'auth', pathMatch:'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./user/user.module').then(x => x.UserModule)
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
