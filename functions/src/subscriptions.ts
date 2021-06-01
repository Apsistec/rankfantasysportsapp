import * as functions from 'firebase-functions';
import { assert, assertUID, catchErrors } from './helpers';
import { stripe, db } from './config';
import { getCustomer } from './customers';
// import { attachSource } from './sources';


/**
Gets a user's subscriptions
*/
export const getSubscriptions = async(uid: string) => {
    const customer = await getCustomer(uid);
    return stripe.subscriptions.list({ customer });
}

/**
Creates and charges user for a new subscription
*/
export const createSubscription = async(uid:string, plan: string, price?: string, coupon?: any, idempotency_key?: string) => {

    const customer = await getCustomer(uid);

    // await attachSource(uid, source);

   const subscription = await stripe.subscriptions.create({
        customer,
        coupon,
        items: [
            {
              plan,
            }
        ],
        add_invoice_items: [{price,}]
    },   { idempotency_key });

    // Add the plan to existing subscriptions
    const docData = {
      'subscription_list_url': [subscription.items.url],
      'subscription': [subscription.id],
      'subStatus': [subscription.status],
      'products': [subscription.items.data]
    }

    await db.doc(`users/${uid}`).set(docData, { merge: true });


    return subscription;
  }

  /**
   Cancels a subscription and stops all recurring payments
   */
  export const cancelSubscription = async(uid: string, subId: string) => {
    const subscription  = await stripe.subscriptions.del(subId);

    const docData = {
      'plan': '',
      [subscription.id]: 'canceled'
    }

    await db.doc(`users/${uid}`).set(docData, { merge: true });

    return subscription;
}


/////// DEPLOYABLE FUNCTIONS ////////

export const stripeCreateSubscription = functions.https.onCall( async (data, context) => {
  const uid = assertUID(context);
    const plan = assert(data, 'plan');
    const price = assert(data, 'price');
    const coupon = assert(data, 'coupon');
    const idempotency_key = assert(data, 'idempotency_key');
    return catchErrors( createSubscription(uid, plan, price, coupon, idempotency_key ) );
  });

  export const stripeCancelSubscription = functions.https.onCall( async (data, context) => {
    const uid = assertUID(context);
    const plan = assert(data, 'plan');
    return catchErrors( cancelSubscription(uid, plan) );
});

export const stripeGetSubscriptions = functions.https.onCall( async (data, context) => {
  const uid = assertUID(context);
  return catchErrors( getSubscriptions(uid) );
});
