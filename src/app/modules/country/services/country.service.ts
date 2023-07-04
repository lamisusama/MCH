import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { BaseFilter } from 'src/app/sharedFeatures/models/base-filter.model';
import { BaseHttpServiceService } from 'src/app/sharedFeatures/services/base-http-service.service';
import { CurrentUserService } from 'src/app/sharedFeatures/services/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseHttpServiceService {
  constructor(
    http: HttpClient,
    translateService: TranslateService,
    currentUserService: CurrentUserService
  ) {
    super(http, translateService, currentUserService);
  }

getAll(fillter:BaseFilter): Observable<any>
{
    let url: string = `${this.baseUrl}/CompanySetting/GetAllCountries`;
    return this.postData<any>(url, fillter);
}

delete(id:any):Observable<boolean>
{
    let url: string = `${this.baseUrl}/CompanySetting/DelCountry/${id}`;
    return this.getData<any>(url);

}
}
