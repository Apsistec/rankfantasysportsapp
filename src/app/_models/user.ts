export interface ProviderUserInfo {
  email: string;
  federatedId: string;
  providerId: string;
}

export interface User {
  displayName: string;
  uid: string;
  photoURL: string;
  role: 'USER' | 'ADMIN' | 'EDITOR';
  permissions: string[];
  email: string;
  stripeCustomerId?: string;
  plan?: 'gold' | 'silver' | 'bronze';
  status?: string;
  subId?: string;
  provider?: ProviderUserInfo;
}

