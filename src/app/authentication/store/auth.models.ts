import { AuthInfoFromUser, IVerifiedUser, VerifiedUser } from '../../shared/models/user.model';


export interface AuthState {
  verifiedUser: IVerifiedUser | null | undefined;
  loading: boolean;
  signUpCreds?: UserRegistrationFromEmailActionProp;
  signInCreds?: UserRegistrationFromEmailActionProp;
  error?: boolean;
  errorMsg?: string;
}

export class LoginStartActionProp {
  constructor(public authInfo: AuthInfoFromUser) {
  }
}

export class LoginSuccessActionProp {
  constructor(public verifiedUser: any, public redirect?: boolean) {
  }
}

export class LoginFailureActionProp {
  constructor(public errorMsg: string) {
  }
}


export class UserRegistrationFromEmailActionProp {
  constructor(public userEmail: string, public password: string, public saveSession: boolean) {
  }
}

export class AuthVerifiedUserProp {
  constructor(public user?: VerifiedUser) {
  }
}


export class LogoutIfRedirectActionProp {
  constructor(public redirect: boolean) {
  }
}
