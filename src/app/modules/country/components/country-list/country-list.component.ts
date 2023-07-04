import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterMetadata, MenuItem, SortMeta } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseFilter } from 'src/app/sharedFeatures/models/base-filter.model';
import { ITableHeader } from 'src/app/sharedFeatures/models/itable-header';
import { DynamicDialogService } from 'src/app/sharedFeatures/services/dynamic-dialog/dynamic-dialog.service';
import { NotificationService } from 'src/app/sharedFeatures/services/notification.service';
import { PageTitleService } from 'src/app/sharedFeatures/services/page-title.service';
import { CountryService } from '../../services/country.service';
import { TableHeaderType } from 'src/app/sharedFeatures/enum/table/table-header-type';
import { PermissionEnum } from 'src/app/sharedFeatures/enum/permission-enum';
import { DeleteModalComponent } from 'src/app/applicationFeatures/shared-components/delete-modal/delete-modal.component';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent  implements OnInit {
  tableColumns: ITableHeader[] = [];
  tableActions: MenuItem[] = [];
  dynamicDialogRef: DynamicDialogRef;
  fillter:BaseFilter=new BaseFilter;
  isLoading: boolean = true;
  dataList: any[];
  permissionEnum: any = PermissionEnum;
  gaurd: any;
  constructor( private router: Router,
/*     private gaurd:AuthGuard,
 */   private dynamicDialogService: DynamicDialogService,
    private notificationService: NotificationService,
    private countryService:CountryService,
    private pageTitle: PageTitleService) { }

  ngOnInit(): void {
    this.setPageTitle();
    this.generateTableColumn();
    this.generateTableActions();
    this.initFilter();
  }
  setPageTitle(): void {
    this.pageTitle.setTitleTranslated(`itemTypes.previtemTypesList`);
  }
  initFilter(): void {
  /*   this.fillter = new BaseFilter();
    this.fillter.pagination = Pagination.newPagination(0, 10, 0, true); */
    this.getAllCountries();
  }
  

  generateTableColumn(): void {
    this.tableColumns = [
     
      {
        field: 'name',
        name: 'country.name',
        type: TableHeaderType.Text,
        removeFlitter: true,
        removeSorting:true
      },
      
    ];
  }
  hasPermission(code:any):boolean{

    let data:any ={ permissionCodes: [code] }

    let hasPermission=this.gaurd.showActivate(data);

    if(hasPermission)

      return true

    return false;

  }
  generateTableActions(): void {
    this.tableActions = [
      {
        visible:this.hasPermission(+PermissionEnum.ItemTypesEdit),
        state:this.hasPermission(+PermissionEnum.ItemTypesEdit)?undefined: {
       
          showIf: this.hasPermission(+PermissionEnum.ItemTypesEdit),
        },
        iconClass: 'fa-regular fa-eye',
        command: (event: any): void => {
          this.router.navigate(['/country/details', event.id]);
        },
      },
      {
        visible:this.hasPermission(+PermissionEnum.ItemTypesEdit),
        state:this.hasPermission(+PermissionEnum.ItemTypesEdit)?undefined: {
       
          showIf: this.hasPermission(+PermissionEnum.ItemTypesEdit),
        },
        iconClass: 'fa-regular fa-edit',
        command: (event: any): void => {
          this.router.navigate(['/country/create', event.id]);
        },
      },
      {
        visible:this.hasPermission(+PermissionEnum.ItemTypesDelete),
        state:this.hasPermission(+PermissionEnum.ItemTypesDelete)?undefined: {
       
          showIf: this.hasPermission(+PermissionEnum.ItemTypesDelete),
        },
        iconClass: 'fa-regular fa-trash-can',
        command: (event: any): void => {
          this.confirmDelete(event.id);
        },
      },
      
    ];
  }
  confirmDelete(id: string): void {
    const dDConfig: DynamicDialogConfig = {
      data: {
        deleteAction: () => {
          this.dynamicDialogRef.close();
          this.delete(id);
        },
      },
      showHeader: false,
      contentStyle: { 'min-width': '470px' },
    };
    this.dynamicDialogRef = this.dynamicDialogService.showDynamicDialog(
      DeleteModalComponent,
      dDConfig
    );
  }
  delete(id: string): void {
    this.countryService.delete(id).subscribe(
      res => {
        this.notificationService.showSuccessTranslated(
          'shared.dataDeletedSuccessfuly',
          'shared.succeed'
        );
        this.getAllCountries();
      },
      error => {
        this.notificationService.showError(error.message, 'error');
      }
    );
  }

  getAllCountries(): void {
    this.countryService.getAll(this.fillter).subscribe(res => {
       this.dataList = res.collection || [];
   /*     this.fillter.pagination =
         this.fillter.pagination.setPaginationByInstance(res.pagination); */
       this.isLoading = false;
     }); 
   }
   
   onSortChanged(requiredInfo: SortMeta[]): void {
    debugger
    if (!requiredInfo) return;
    const info = requiredInfo[0];

 /*    this.fillter.sorting =
      info.order === 1 ? info.field : `${info.field} desc`;
 */
    this.getAllCountries();
  }

  onFilterChanged(event: { [s: string]: FilterMetadata[] }): void {
   /*  this.fillter.filterMetadata = event; */
    this.getAllCountries();
  } 


}
