export class Users {
  createdAt: number;
  email: string;
  lastLoginAt: number;
  lastRefreshAt: number;
  passwordHash: string;
  validSince: number;
  providerUserInfo: ProviderUserInfo;
  passwordUpdatedAt?: number;
  emailVerified?: boolean;
}

export class ProviderUserInfo extends Users {
  email: string;
  federatedId: string;
  providerId: string;
}
