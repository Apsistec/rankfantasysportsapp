
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
}

export class ProviderUserInfo extends User {
    email: string;
    federatedId: string;
    providerId: string;
}
