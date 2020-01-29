export interface ProviderUserInfo {
  email?: string;
  federatedId?: string;
  providerId?: string;
}

export interface User {
  displayName: string;
  uid: string;
  photoURL: string;
  role: null | '' | 'USER' | 'EDITOR' | 'ADMIN' ;
  permissions: string[];
  email: string;
  createdAt?: number;
  lastLoginAt?: number;
  lastRefreshAt?: number;
  passwordHash?: string;
  validSince?: number;
  providerUserInfo?: ProviderUserInfo;
  passwordUpdatedAt?: number;
  emailVerified?: boolean;
  stripeCustomerId?: string;
  plan?: null | '' | 'bronze' | 'silver' | 'gold';
  status?: string;
  subId?: string;
}

