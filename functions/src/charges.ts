import * as functions from 'firebase-functions';
import { assert, assertUID, catchErrors } from './helpers';
import { stripe } from './config';
import { getCustomer } from './customers';
// import { attachSource } from './sources';

/**
Gets a user's charge history
*/
export const getUserCharges = async(uid: string, limit?: number) => {
    const customer = await getCustomer(uid);

    return await stripe.charges.list({
        limit,
        customer
    });
}

/**
Creates a charge for a specific amount
*/
export const createCharge = async(uid: string, amount: number, idempotency_key?: string) => {
    const customer = await getCustomer(uid);

    // await attachSource(uid, source);

    return stripe.charges.create({
            amount,
            customer,
            currency: 'usd',
        },

        { idempotency_key }
     )
}


/////// DEPLOYABLE FUNCTIONS ////////

export const stripeCreateCharge = functions.https.onCall( async (data, context) => {
    const uid = assertUID(context);
    const amount = assert(data, 'amount');

    // Optional
    const idempotency_key = assert (data, 'itempotency_key');

    return catchErrors( createCharge(uid, amount, idempotency_key) );
});


export const stripeGetCharges = functions.https.onCall( async (data, context) => {
    const uid = assertUID(context);
    return catchErrors( getUserCharges(uid) );
});
