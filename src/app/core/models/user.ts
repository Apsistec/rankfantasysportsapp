// export interface Roles {
//     user?: string;
//     admin?: string;
//     moderator?: string;
// }
export interface User {
    uid: string;
    email: string;
    bronze?: boolean;
    emailVerified: boolean;
    gold?: boolean;
    silver?: boolean;
    // roles: Roles;
    displayName?: string;
    photoURL?: string;
    stripeCustomerId?: string;
}
