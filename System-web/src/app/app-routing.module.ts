import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  // { path: '', component:SignupComponent, pathMatch: 'full' },
  { 
    path: 'user', 
    loadChildren:() =>import('./user/user.module').then(x=>x.UserModule)  
  },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
