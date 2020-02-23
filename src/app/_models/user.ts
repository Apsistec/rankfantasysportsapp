export interface ProviderUserInfo {
  email: string;
  federatedId: string;
  providerId: string;
}

export interface User {
  displayName: string;
  uid: string;
  photoURL: string;
  email: string;
  role?: string;
  permissions?: string[];
  stripeCustomerId?: string;
  plan?: string;
  status?: string;
  subId?: string;
  provider?: ProviderUserInfo;
  gold?: boolean;
  silver?: boolean;
  bronze?: boolean;
}

