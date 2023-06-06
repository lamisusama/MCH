import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegionsListComponent } from './components/regions-list/regions-list.component';
import { RegionsAddEditComponent } from './components/regions-add-edit/regions-add-edit.component';
import { RegionsDetailsComponent } from './components/regions-details/regions-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/regions/list' },
  {
    path: 'list',
    component: RegionsListComponent,
  },

  {
    path: 'details/:id',
    component: RegionsDetailsComponent,
  },
  {
    path: 'create/:id',
    component: RegionsAddEditComponent,
  },
  {
    path: 'create',
    component: RegionsAddEditComponent,
  },
  // {
  //   path: 'edit/:id',
  //   component: ManeuveringComponent,
  //   data: { permissionCodes: [+PermissionEnum.OrganizationList] },
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionsRoutingModule {}
