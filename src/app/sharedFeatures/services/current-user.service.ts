import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoggedIn } from '../models/user-login.model';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  isLoggedIn(): boolean {
    let user = this.getCurrentUser();
    return user != null;
  }
  getCurrentUser(): UserLoggedIn | null {
    let item = localStorage.getItem(this.currentUser);

    let user: UserLoggedIn = item != null ? JSON.parse(item) : null;
    return user;
  }
  getCurrentUserIdString(): string | null {
    let result: string;
    let user = this.getCurrentUser();
    if (user) {
      let token = jwt_decode.default(user.Data.Access_Token) as any;
      if (token) {
        return token.unique_name;
      }
    }
    return null;
  }

  logOut(showAuthError: boolean = false) {
    localStorage.removeItem(this.currentUser);
    if (showAuthError) {
      // this.notificationService.showErrorTranslated('error.shared.operationFailed','');
    }
    this.router.navigate(['login']);
  }

  getToken(): any {
    let user = this.getCurrentUser();
    if (user) return user.Data.Access_Token;
  }

  private currentUser: string = 'currentUser';
  //User: UserLoggedIn;
}
