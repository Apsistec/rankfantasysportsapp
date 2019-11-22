[![Rank Fantasy Sports](https://drive.google.com/uc?export=view&id=1qNmOARsFsiJeri9mIi_sBRIPXHLHq1a22h8LZC1jzLs)](http://rankfantasysports.com)

# rfs

> A cross platform progressive web app for daily fantasy sports players who Win

:football: :basketball: :tennis: :golf: :trophy: :dollar: :moneybag:

## Rank Fantasy Sports PWA

What is RankFantasySports.com used for?
>  Unique approach to data compilation to make more informed winning lineups in less time, and ultimately to help DFS players such as yourself win more & more often!
> The app is a mix between a website and and an app you would install from Google Play or the App Store. Basically you visit the site like any other but it can also be visited from any device with a browser, such as a TV, tablet, smart phone, or computer. The app is designed for use by players of daily fantasy sports(DFS) platforms.
> The app is a tool which provides concise and highly relevent data to users in a readily usable and functional way so they can be confident in their decisions. 


#### Tech Stack

- Ionic 4 
- Angular 7/8
- Cordova
- Angular Material
- Firebase
 - Firestore
 - Static Hosting
 - Cloud Functions
 - Authenticaation
 - Storage
 - Analytics
 - Extensions
  - Sendgrid
- Stripe

---

## Table of Contents (Optional)

- [Installation](#installation)
- [Support](#support)

---

## Installation

- All the `code` required to get started
- Images of what it should look like

### Clone

- Clone this repo to your local machine using `https://github.com/apsistec/rfs`

### Setup

#### Install App code via npm

```shell
$ npm install
```
#### Install Cloud Functions

> Verify Stripe Secret Key (Test or Live) and Stripe Webhook Key (Test or Live) are correct configured from the Stripe account dashoard. 

```shell
$ cd functions
$ firebase functions:config:get
$ firebase functions:config:set
```

> Verify correct Private Key (accountServiceKey.json) is set in the functions folder or create a new Private Key by going to [Firebase Admin SDK Settings](https://console.firebase.google.com/project/rankfantasysports-test/settings/serviceaccounts/adminsdk)

```shell
$ npm i
$ cd ..
```

### Serve

> Start Ionic Server with mobile lab and DevApp for testing live on mobile devices currently on local network **must have DevApp App installed**

```shell
$ ionic serve -l --devApp
```

---

## Documentation

> Start Documentation Server

``` shell
$ npm run compodoc
```
---


## Support

> Reach out to me at one of the following places!

- Website at <a href="http://rankfantasysports.com" target="_blank">`rankfantasysports.com`</a>
- Facebook at <a href="https://fb.me/rankfantasysports" target="_blank">`RFSports`</a>
- Twitter at <a href="http://twitter.com/rankfsports" target="_blank">`@rankfsports`</a>
- Instagram at <a href="https://www.instagram.com/rankfsports" target="_blank">`rankfsports`</a>
- Youtube at <a href="https://www.youtube.com/channel/UCxhm1g7GjuwkVWRrdpcZbcg" target="_blank">`RFSports Youtube`</a>
- Slack at <a href="https://rankfantasysports.slack.com" target="_blank">`RF$ports Slack Channel`</a>

---


- Copyright 2019 © <a href="http://rankfantasysports.com" target="_blank">RankFantasySports</a>.
