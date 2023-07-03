import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { BaseHttpServiceService } from 'src/app/sharedFeatures/services/base-http-service.service';
import { CurrentUserService } from 'src/app/sharedFeatures/services/current-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseHttpServiceService {
  // private controller: string = `${this.baseUrl}/Users/`;
  constructor(
    http: HttpClient,
    translateService: TranslateService,
    currentUserService: CurrentUserService
  ) {
    super(http, translateService, currentUserService);
  }
}
