
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
    providerUserInfo?: ProviderUserInfo;
    passwordUpdatedAt?: number;
    emailVerified?: boolean;
    stripeCustomerId?: string;
    plan?: string;
    status?: string;
    subId?: string;
}

class ProviderUserInfo extends User {
    email: string;
    federatedId: string;
    providerId: string;
}
