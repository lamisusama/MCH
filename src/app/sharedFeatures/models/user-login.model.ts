export interface UserLoggedIn {
  Status: string;
  Error_AR: string;
  Error_EN: string;
  Error_Code: string;
  RESULT_CODE: string;
  Data: UserDataLoggedIn;
}

export interface UserDataLoggedIn {
  User_ID: any;
  User_LoginName: string;
  User_NameAr: string;
  User_NameEn: string;
  Access_Token: string;
  Refresh_Token: string;
  UserBranches: [];
  CompanyData: any;
}
