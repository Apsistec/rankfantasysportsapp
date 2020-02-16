export interface ProviderUserInfo {
  email?: string;
  federatedId?: string;
  providerId?: string;
}

export interface User {
  displayName: string;
  uid: string;
  photoURL: string;
  role: string;
  permissions: string[];
  email: string;
  stripeCustomerId?: string;
  plan?: string;
  status?: string;
  subId?: string;
}

