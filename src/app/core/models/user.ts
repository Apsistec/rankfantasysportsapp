export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    stripeCustomerId?: string;
    subscriptions?: {
        [key: string]: 'active' | 'pastDue' | 'cancelled';
    },
    emailVerified?: boolean;

}
