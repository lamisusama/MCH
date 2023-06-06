import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegionsService {
  constructor(private http: HttpClient) {}

  getAllRegions(): Observable<any> {
    return this.http.get('mch.al7osamerp.com/api/CompanySetting/GetAllRegions');
  }
}

/* export class RegionsService extends BaseHttpServiceService {
  constructor(http: HttpClient, currentUserService: CurrentUserService) {
    super(http, currentUserService);
  }

  AddRegions(model: AddEditRegionsViewModel): Observable<boolean> {
    let url: string = `${this.baseUrl}/item-type/add`;
    return this.postData<boolean>(url, model);
  }
  Update(model: AddEditRegionsViewModel): Observable<boolean> {
    let url: string = `${this.baseUrl}/item-type/update`;
    return this.postData<boolean>(url, model);
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
