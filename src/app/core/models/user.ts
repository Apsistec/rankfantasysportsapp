// export interface Roles {
//     USER?: string;
//     ADMIN?: string;
// }
export class User {
    uid: string;
    displayName: string;
    photoURL: string;
    email: string;
    role?: string;
    permissions?: string[];
    bronze?: boolean;
    gold?: boolean;
    silver?: boolean;
    stripeCustomerId?: string;
    idempotency_key?: string;
}
