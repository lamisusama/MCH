import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsAddEditComponent } from './components/regions-add-edit/regions-add-edit.component';
import { RegionsListComponent } from './components/regions-list/regions-list.component';
import { RegionsDetailsComponent } from './components/regions-details/regions-details.component';
import { RegionsRoutingModule } from './regions-routing.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegionsAddEditComponent,
    RegionsListComponent,
    RegionsDetailsComponent,
  ],
  imports: [CommonModule, RegionsRoutingModule, IconsModule, TableModule,FormsModule,
    ReactiveFormsModule],
})
export class RegionsModule {}
