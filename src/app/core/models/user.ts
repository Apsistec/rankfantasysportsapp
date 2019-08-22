export interface Roles {
    visitor?: boolean;
    subscriber?: boolean;
    admin?: boolean;
}

export interface User {
    uid: string;
    email: string;
    roles: Roles;
    emailVerified: boolean;
    stripeCustomerId?: string;
    displayName?: string;
    photoURL?: string;
}
