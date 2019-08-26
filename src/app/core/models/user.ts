export interface Roles {
    user?: string;
    admin?: string;
    moderator?: string;
}
export interface User {
    uid: string;
    email: string;
    bronze: boolean;
    gold: boolean;
    silver: boolean;
    roles: Roles;
    emailVerified: boolean;
    displayName?: string;
    photoURL?: string;
    stripeCustomerId?: string;
}
