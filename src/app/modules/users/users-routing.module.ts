import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from 'src/app/sharedFeatures/services/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users/list' },
  {
    path: 'users',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
