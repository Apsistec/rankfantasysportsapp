import { db } from './config';
import * as functions from 'firebase-functions';

export const archiveChat = functions.firestore
    .document('chats/{chatId}')
    .onUpdate(change => {
        const data = change.after.data();

        const maxLen = 50;
        const msgLen = data.messages.length;
        const charLen = JSON.stringify(data).length;

        if (charLen >= 10000 || msgLen >= maxLen) {
            const batch = db.batch();
            data.messages.splice(0, msgLen - maxLen);
        }
    });
