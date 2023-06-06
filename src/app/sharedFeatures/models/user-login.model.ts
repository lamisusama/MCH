export interface UserLoggedIn {
  access_token: string;
  email: string;
  nameAr: string;
  nameEn: string;
  name: string;
  id: any;
  permissions: number[];
  token_type: string;
  userName: string;
  isFirstTimeLogin: boolean;

  profileImage: string;
  roleName: string;
}
