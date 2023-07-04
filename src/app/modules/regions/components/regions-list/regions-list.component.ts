import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { DynamicDialogService } from 'src/app/sharedFeatures/services/dynamic-dialog/dynamic-dialog.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { hasProperty } from 'src/app/sharedFeatures/functions/key-at-list-check';

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css'],
})
export class RegionsListComponent implements OnInit {
  regions: Region[] = [];
  cols: any[] = [];
  first: number = 0;
  pageSize: number = 10;
  totalCount: number = 0;
  pageIndex: number = 0;
  totalPageCount: number = 0;
  tableColumns: ITableHeader[] = [];
  tableActions: MenuItem[] = [];
  fillter: BaseFilter = new BaseFilter();
  dynamicDialogRef: DynamicDialogRef;
  selectedRecords: any[] = [];
  recordKey: string = '';
  currentPageReportTemplate: string = '';
  moduleTitle: string;
  viewMood: TableViewMood = TableViewMood.RecordsView;

  @Input() actions: MenuItem[] = [];
  @Input() actionButtonClass: string =
    'aube-btn-outline rounded-circle btn-color-lightblue';
  /* @Output() pageIndexChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>(); */
  @Output() sortChanged: EventEmitter<SortMeta[]> = new EventEmitter<
    SortMeta[]
  >();

  @Output() selectedRecordsChanged: EventEmitter<any[]> = new EventEmitter<
    any[]
  >();
  @Output() filterChanged: EventEmitter<{
    [s: string]: FilterMetadata[];
  }> = new EventEmitter<{ [s: string]: FilterMetadata[] }>();

  constructor(
    private router: Router,
    private RegionsService: RegionsService // private dynamicDialogService: DynamicDialogService, // private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.generateTableColumn();
    this.fillter.Page_Index = 1;
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
      this.totalCount = res.Data.Total_Count;
      this.pageIndex = res.Data.Page_Index;
      this.totalPageCount = res.Data.Total_Pages_Count;
      //this.pageCount = res.Data.Page_Count;
    });
  }
  setPageTitle(): void {}

  generateTableColumn(): void {
    this.tableColumns = [
      {
        field: 'Region_Code',
        name: 'كود المنطقة',
        type: TableHeaderType.Text,
        removeFlitter: true,
        removeSorting: true,
      },
      {
        field: 'Region_Name1',
        name: 'الإسم',
        type: TableHeaderType.Text,
        removeFlitter: true,
        removeSorting: true,
      },
      {
        field: 'Region_Notes',
        name: 'الملاحظات',
        type: TableHeaderType.Text,
        removeFlitter: true,
        removeSorting: true,
      },
      {
        field: 'Region_IsDefault',
        name: 'افتراضي',
        type: TableHeaderType.Boolean,
        removeFlitter: true,
        removeSorting: true,
      },
    ];
  }
  onPageChange(event: { first: number; rows: number }): void {
    let pageIndex = event.first / event.rows + 1;

    this.fillter.Page_Count = null;
    this.fillter.Page_Index = pageIndex;

    this.getAllRegions();
  }
  onFilterChange(event: {
    filteredValue: any[];
    filters: { [s: string]: FilterMetadata[] };
  }): void {
    debugger;
    // let d = event.filters['documentDate'];

    this.filterChanged.emit(event.filters);
  }

  onSort(event: { multisortmeta: SortMeta[] }): void {
    debugger;
    if (this.isColumnSortable(event.multisortmeta[0]?.field))
      this.sortChanged.emit(event.multisortmeta);
  }
  isColumnSortable(felid: string) {
    debugger;
    const col = this.tableColumns.find((col) => col.field === felid);
    return !col?.removeSorting;
  }
  onTakeAction(item: MenuItem, recordData: any): void {
    if (recordData.id && item.command) item.command(recordData);
  }
  getRecordKey(): void {
    debugger;
    this.recordKey =
      this.tableColumns.find((col) => col.recordKey)?.field || '';
  }
  setPaginationTitle(): void {
    debugger;
    this.currentPageReportTemplate = `${this.totalCount
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}  ${this.moduleTitle}`;
  }
  onSelectionChange(event: any): void {
    debugger;
    if (
      hasProperty(this.selectedRecords, 'key') &&
      this.viewMood === TableViewMood.GroupView
    )
      this.selectedRecords = JSON.parse(JSON.stringify(this.regions));
    this.selectedRecordsChanged.emit(this.selectedRecords);
  }
  trackByIndex(index: number): number {
    return index;
  }
}
