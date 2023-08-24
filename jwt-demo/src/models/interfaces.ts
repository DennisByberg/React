interface IApiSignupResponse {
  success: boolean;
  message?: string;
}

interface IApiLoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}

interface IApiUserResponse {
  success: boolean;
  account?: IAccount;
  message?: string;
}

interface IAccount {
  password: string;
  userId: string;
  username: string;
}
