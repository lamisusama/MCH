import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryAddEditComponent } from './components/country-add-edit/country-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { IconsModule } from 'src/app/icons/icons.module';
import { CountryRoutingModule } from './country-routing.module';



@NgModule({
  declarations: [
    CountryListComponent,
    CountryAddEditComponent
  ],
  imports: [
    CommonModule, CountryRoutingModule, IconsModule, TableModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class CountryModule { }
