import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './components/assets/assets.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './modules/users/components/login/login.component';
import { LoginActivate } from './sharedFeatures/services/login-activate.service';

const routes: Routes = [
  //{ path: '', component: DashboardComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginActivate] },
  {
    path: 'regions',
    loadChildren: () =>
      import('src/app/modules/regions/regions.module').then(
        (m) => m.RegionsModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('src/app/modules/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
