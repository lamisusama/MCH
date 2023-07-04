import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedCommonModuleRoutingModule } from './shared-common-module-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedCommonModuleRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [/* 
    HasPermissionDirective,
    HasNotPermissionDirective,
    SearchPipe,
    LoaderModule, */
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedCommonModuleModule { }
