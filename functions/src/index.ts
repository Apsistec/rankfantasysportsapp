
const admin = require('firebase-admin');
// admin.initializeApp();
import * as functions from 'firebase-functions';

// A simple callable function for a sanity check
export const testFunction = functions.https.onCall( async (data, context) => {
    const uid  = context.auth && context.auth.uid;
    const message = data.message;

    return `${uid} sent a message of ${message}`
});

// export const addPaidSubscriberRole = functions.https.onCall((data, context) => {
//   // check request is made by an admin
//   if ( context.auth.token.admin !== true ) {
//     return { error: 'Only admins can change subscriber information' }
//   }
//   // get user and add admin custom claim
//   return admin.auth().getUserByEmail(data.email).then(user => {
//     return admin.auth().setCustomUserClaims(user.uid, {
//       paidSubscriber: true
//     })
//   }).then(() => {
//     return {
//       message: `Success! ${data.email} is a paid Subscriber.`
//     }
//   }).catch(err => {
//     return err;
//   });
// });

export { 
    stripeAttachSource 
} from './sources';

export { 
    stripeCreateCharge, 
    stripeGetCharges 
} from './charges';

export { 
    stripeCreateSubscription, 
    stripeGetSubscriptions, 
    stripeCancelSubscription 
} from './subscriptions';

export { 
    invoiceWebhookEndpoint
} from './webhooks';

export { 
    stripeGetCoupon
} from './coupons';




