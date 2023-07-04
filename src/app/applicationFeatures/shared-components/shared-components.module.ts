import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentRoutingModule } from './shared-components-routing.module';
import { TranslateModule } from '@ngx-translate/core';

/** <--- Prime Ng ---> */
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { EnumFilterComponent } from './grid/enum-filter/enum-filter.component';
import { GroupByMenuComponent } from './grid/group-by-menu/group-by-menu.component';

/** <--- Prime Ng ---> */

const PRIM_MODULES = [
  FormsModule,
  TableModule,
  InputTextModule,
  DropdownModule,
  MultiSelectModule,
  ButtonModule,
  CalendarModule,
  ContextMenuModule,
  DialogModule,
  ProgressBarModule,
  MenuModule,
  CheckboxModule,
  OverlayPanelModule,
  DynamicDialogModule,
];

@NgModule({
  declarations: [GridComponent, EnumFilterComponent, GroupByMenuComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedComponentRoutingModule,
    ...PRIM_MODULES,
  ],
  exports: [GridComponent, ...PRIM_MODULES],
  providers: [MessageService, DialogService],
})
export class SharedComponentsModule {}
