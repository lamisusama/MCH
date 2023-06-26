import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UserLoggedIn } from './../../../sharedFeatures/models/user-login.model';
import { BaseHttpServiceService } from './../../../sharedFeatures/services/base-http-service.service';
import { CurrentUserService } from './../../../sharedFeatures/services/current-user.service';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseHttpServiceService {
  //private controller: string = `${this.baseUrl}/Users/user-login`;
  // baseURL=environment.APIUrl;
  constructor(
    http: HttpClient,
    translateService: TranslateService,
    currentUserService: CurrentUserService
  ) {
    super(http, translateService, currentUserService);
  }

  login(item: Login): Observable<any> {
    let url: string = `${this.baseUrl}/Login/UserLogin`;
    return this.postData<any>(url, item);
  }
}
