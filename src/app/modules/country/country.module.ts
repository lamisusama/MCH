import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryAddEditComponent } from './country-add-edit/country-add-edit.component';



@NgModule({
  declarations: [
    CountryListComponent,
    CountryAddEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
