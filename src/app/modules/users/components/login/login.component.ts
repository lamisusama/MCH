import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../../../sharedFeatures/services/notification.service';
import { UserLoggedIn } from '../../../../sharedFeatures/models/user-login.model';
import { PageTitleService } from '../../../../sharedFeatures/services/page-title.service';
import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';
import { LanguageService } from 'src/app/sharedFeatures/services/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  language!: string;
  loginForm!: FormGroup;
  subscriptionTranslate!: Subscription;
  currentUser: UserLoggedIn | null = null;
  subscriptions: Subscription[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private translateService: TranslateService,
    public languageService: LanguageService,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private pageTitle: PageTitleService
  ) {}
  changeLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('currentLang', lang);
    this.languageService.setLanguage(lang);
  }
  ngOnInit(): void {
    this.setPageTitle();
    this.buildForm();
    this.setLanguageSubscriber();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  submit(): void {
    if (this.loginForm.valid) {
      let loginModel: Login = {
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value,
      };
      this.subscriptions.push(
        this.loginService.login(loginModel).subscribe(
          (res: any) => {
            this.currentUser = res;
            localStorage.setItem('currentUser', JSON.stringify(res));
            this.router.navigate(['/dashboard']);
          },
          (error: any) => {
            console.log('FormErrors' + JSON.stringify(error));
            if (error.status == 400) {
              let key = 'error.400';
              this.translateService.get([key]).subscribe((res) => {
                this.notificationService.showErrorTranslated(`${res[key]}`, '');
              });
            } else {
              this.notificationService.showErrorTranslated(
                'error.shared.operationFailed',
                ''
              );
            }
          },
          () => {}
        )
      );
    } else {
      const loginFormFormKeys = Object.keys(this.loginForm.controls);
      loginFormFormKeys.forEach((control) => {
        this.loginForm.controls[control].markAsTouched();
      });
    }
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      username: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(200),
        ],
      ],
      password: [null, [Validators.required, Validators.maxLength(200)]],
    });
  }
  setLanguageSubscriber(): void {
    this.language = this.translateService.currentLang;
    this.subscriptionTranslate = this.translateService.onLangChange.subscribe(
      (val) => {
        this.language = val.lang;
      },
      (error) => {},
      () => {}
    );
    this.subscriptions.push(this.subscriptionTranslate);
  }
  setPageTitle(): void {
    this.pageTitle.setTitleTranslated(`login.Title`);
  }

  getControl(controlName: string): any {
    return this.loginForm?.controls[controlName];
  }
}
