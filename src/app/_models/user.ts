<<<<<<< Updated upstream
<<<<<<< Updated upstream

export class User {
    displayName: string;
    uid: string;
    photoURL: string;
    role: string;
    permissions: string[];
    email: string;
    createdAt?: number;
    lastLoginAt?: number;
    lastRefreshAt?: number;
    passwordHash?: string;
    validSince?: number;
    stripeCustomerId?: string;
    providerUserInfo?: ProviderUserInfo;
    bronze?: boolean;
    gold?: boolean;
    silver?: boolean;
    passwordUpdatedAt?: number;
    emailVerified?: boolean;
=======
=======
>>>>>>> Stashed changes
export interface ProviderUserInfo {
  email?: string;
  federatedId?: string;
  providerId?: string;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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

