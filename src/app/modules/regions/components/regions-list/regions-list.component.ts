import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionsService } from '../../services/regions.service';
import { PageTitleService } from 'src/app/sharedFeatures/services/page-title.service';
import { BaseFilter } from 'src/app/sharedFeatures/models/base-filter.model';

import { AddEditRegionsViewModel } from '../../models/AddEdit-Regions.Model';
import { Region } from '../../region';

import { FilterMetadata, MenuItem, PrimeNGConfig, SortMeta } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ITableHeader } from 'src/app/sharedFeatures/models/itable-header';
import { TableHeaderType } from 'src/app/sharedFeatures/enum/table/table-header-type';
import { TableViewMood } from 'src/app/sharedFeatures/enum/table/table-view-mode';

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

  constructor(
    private router: Router,
    private RegionsService: RegionsService,
    private pageTitle: PageTitleService
  ) {}

  ngOnInit() {
    this.getAllRegions();

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'age', header: 'Age' },
      { field: 'email', header: 'Email' },
    ];
  }

  getAllRegions(): void {
    this.RegionsService.getAllRegions().subscribe((res) => {
      this.regions = res.collection || [];
    });
  }
  setPageTitle(): void {}
}
