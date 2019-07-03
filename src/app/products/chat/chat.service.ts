// import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';
// import {  } from 'dialogflow';
// import { BehaviorSubject } from "rxjs";

// export class Message {
//   constructor(public content: string, public sentBy: string) {}
// }



// @Injectable({
//   providedIn: "root"
// })
// export class ChatService {
//   readonly token = environment.dialogflow.$portsBot;
//   readonly client = new DialogflowClient({ accessToken: this.token });

//   conversation = new BehaviorSubject<Message[]>([]);

//   constructor() {}

//   // Sends and receives messages via DialogFlow
//   converse(msg: string) {
//     const userMessage = new Message(msg, "user");
//     this.update(userMessage);

//     return this.client.textRequest(msg).then(res => {
//       const speech = res.result.fulfillment.speech;
//       const botMessage = new Message(speech, "bot");
//       this.update(botMessage);
//     });
//   }

//   // Adds message to source
//   update(msg: Message) {
//     this.conversation.next([msg]);
//   }
// }
