import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/sharedFeatures/services/auth-guard.service';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryAddEditComponent } from './country-add-edit/country-add-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/regions/list' },
  {
    path: 'list',
    component: CountryListComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: CountryAddEditComponent,
    //canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionsRoutingModule {}
