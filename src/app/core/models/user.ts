export interface Roles {
    USER?: string;
    ADMIN?: string;
}
export interface User {
    uid: string;
    displayName: string;
    email: string;
    role: Roles;
    firstSignIn: string;
    bronze?: boolean;
    gold?: boolean;
    silver?: boolean;
    photoURL?: string;
    stripeCustomerId?: string;
}
