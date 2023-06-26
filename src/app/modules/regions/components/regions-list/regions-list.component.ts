import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionsService } from '../../services/regions.service';

import { BaseFilter } from 'src/app/sharedFeatures/models/base-filter.model';

import { AddEditRegionsViewModel } from '../../models/AddEdit-Regions.Model';
import { Region } from '../../region';

import { FilterMetadata, MenuItem, PrimeNGConfig, SortMeta } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ITableHeader } from 'src/app/sharedFeatures/models/itable-header';
import { TableHeaderType } from 'src/app/sharedFeatures/enum/table/table-header-type';
import { TableViewMood } from 'src/app/sharedFeatures/enum/table/table-view-mode';
import { NotificationService } from 'src/app/sharedFeatures/services/notification.service';
import { AuthGuard } from 'src/app/sharedFeatures/services/auth-guard.service';
import { DynamicDialogService } from 'src/app/sharedFeatures/services/dynamic-dialog/dynamic-dialog.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css'],
})
export class RegionsListComponent implements OnInit {
  regions: Region[] = [];
  cols: any[] = [];

  tableColumns: ITableHeader[] = [];
  tableActions: MenuItem[] = [];
  fillter: BaseFilter = new BaseFilter();
  dynamicDialogRef: DynamicDialogRef;
  constructor(
    private router: Router,
    private RegionsService: RegionsService,
    private gaurd: AuthGuard // private dynamicDialogService: DynamicDialogService, // private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getAllRegions();

    this.cols = [
      { field: 'Region_Code', header: 'كود المنطقة' },
      { field: 'Region_Name1', header: 'الإسم' },
      { field: 'Region_Notes', header: 'الملاحظات' },
      { field: 'Region_IsDefault', header: 'افتراضي' },
    ];

  }

  getAllRegions(): void {
    this.RegionsService.getAllRegions(this.fillter).subscribe((res) => {
      debugger;
      this.regions = res.Data.Data || [];
    });
  }
  setPageTitle(): void { }
}
