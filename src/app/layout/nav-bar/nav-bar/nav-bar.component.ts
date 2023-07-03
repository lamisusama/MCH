import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/modules/users/services/user.service';
import { UserLoggedIn } from 'src/app/sharedFeatures/models/user-login.model';
import { CurrentUserService } from 'src/app/sharedFeatures/services/current-user.service';
import { LanguageService } from 'src/app/sharedFeatures/services/language.service';
import { NotificationService } from 'src/app/sharedFeatures/services/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  currentUser: UserLoggedIn | null = null;
  domainUrl: string = this._UsersService.domainUrl;

  constructor(
    private currentUserService: CurrentUserService,
    private router: Router,
    private notificationService: NotificationService,

    private _UsersService: UserService,
    private translateService: TranslateService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.currentUserService.getCurrentUser();

    if (this.currentUser == null) {
      this.router.navigate(['/login']);
    }
  }
  userLogout() {
    this.currentUserService.logOut();
    this.router.navigate(['/login']);
  }
}
