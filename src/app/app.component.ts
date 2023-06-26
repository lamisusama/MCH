import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserLoggedIn } from './sharedFeatures/models/user-login.model';
import { CurrentUserService } from './sharedFeatures/services/current-user.service';
import { LanguageService } from './sharedFeatures/services/language.service';
import { HubNotifictionService } from 'src/app/sharedFeatures/services/HubNotifiction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MCH';
  directionRTL: boolean = true;
  isMenuCollapsed: boolean = false;
  isNavigating: boolean = false;
  currentUser: UserLoggedIn | null = null;

  constructor(
    public translateService: TranslateService,
    public HubNotifictionService: HubNotifictionService,
    private currentUserService: CurrentUserService,
    private router: Router,
    public languageService: LanguageService
  ) {
    translateService.addLangs(['en', 'ar']);
    var currentLang = localStorage.getItem('currentLang');
    if (currentLang != null && currentLang != 'null') {
      this.languageService.setLanguage(currentLang);
      this.translateService.use(currentLang);
    } else {
      this.languageService.setLanguage('en');
      translateService.use('en');
    }
  }

  ngOnInit(): void {
    this.HubNotifictionService.startConnection();
    this.HubNotifictionService.addDataSetReviewListener();
    this.HubNotifictionService.addNEBTReviewListener();

    this.router.events.subscribe(() => {
      this.currentUser = this.currentUserService.getCurrentUser();
      this.HubNotifictionService.userId = this.currentUser?.Data.User_ID;
    });
  }

  goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  switchLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('currentLang', lang);
  }
}
