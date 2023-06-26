import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseHttpServiceService } from 'src/app/sharedFeatures/services/base-http-service.service';
import { CurrentUserService } from 'src/app/sharedFeatures/services/current-user.service';
import { BaseFilter } from 'src/app/sharedFeatures/models/base-filter.model';
import { TranslateService } from '@ngx-translate/core';
import { AddEditRegionsViewModel } from '../models/AddEdit-Regions.Model';

@Injectable({
  providedIn: 'root',
})
export class RegionsService extends BaseHttpServiceService {
  constructor(
    http: HttpClient,
    translateService: TranslateService,
    currentUserService: CurrentUserService
  ) {
    super(http, translateService, currentUserService);
  }
  getAllRegions(fillter: BaseFilter): Observable<any> {
    let url: string = `${this.baseUrl}/CompanySetting/GetAllRegions`;
    return this.postData<any>(url, fillter);
    // return this.getData<any>(url);
    //return this.http.get(url);
  }
  AddRegions(model: AddEditRegionsViewModel): Observable<boolean> {
    let url: string = `${this.baseUrl}/CompanySetting/AddRegion`;
    return this.postData<any>(url, model);
  }
  Update(model: AddEditRegionsViewModel): Observable<boolean> {
    let url: string = `${this.baseUrl}/CompanySetting/UpdRegion`;
    return this.postData<any>(url, model);
  }


}

/* export class RegionsService extends BaseHttpServiceService {
  constructor(http: HttpClient, currentUserService: CurrentUserService) {
    super(http, currentUserService);
  }


  getByID(id: any): Observable<AddEditRegionsViewModel> {
    let url: string = `${this.baseUrl}/item-type/getById/${id}`;
    return this.getData<AddEditRegionsViewModel>(url);
  }

   getAll(fillter: BaseFilter): Observable<any> {
    let url: string = `${this.baseUrl}/item-type/get`;
    return this.postData<any>(url, fillter);
  }

  delete(id: any): Observable<boolean> {
    let url: string = `${this.baseUrl}/item-type/delete/${id}`;
    return this.getData<any>(url);
  }
} */
