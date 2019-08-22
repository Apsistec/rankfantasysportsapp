export class User {
    uid: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token?: string;
    emailVerified: boolean;
    stripeCustomerId?: string;
    displayName?: string;
    photoURL?: string;
}
