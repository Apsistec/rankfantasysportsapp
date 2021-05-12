# rankfantasysports

A subscription based cross-platform web-app delivering a unique suite of highly relevent, effective NFL, NCAA, NBA, PGA, & Tennis data-tables enabling daily fantasy sports players to efficiently create DFS platform lineups that win more and more often!

* **Pick More Winning :football:  :basketball:  :tennis:  :golf: Lineups**

* **Win :1st_place_medal:  :trophy: :medal_sports: More Often**

* **Win More** :heavy_dollar_sign: :dollar: :moneybag:

## Rank Fantasy $ports&trade; PWA

What is RankFantasySports.com?

1. A suite of sports related datatables and data-analysis tools with which a collection of data-sets and a proprietary data-set is compiled and analyzed. The data is then presented in a meaningful and highly effective way enabling subscribers to use the data as a guide for effeciently creating daily fantasy sports lineups that win more, more often.
2. A progressive web app, PWA, enabling features such as in-app messaging and alerts, group messaging, file control, camera control, microphone control, home screen app installation, and other features that work cross-platform, on most devices that have a browser.

### Tech Stack

* Ionic 4
* Angular 7/8
* Cordova
* Angular Material
* Stripe
* Firebase
  * Firestore
  * Static Hosting
  * Cloud Functions
  * Authenticaation
  * Storage
  * Analytics
  * Extensions
    * Sendgrid

***

## Structure of App

* Purchase is for all Stripe related actions which uses CLoud Functions to facilitate securely
* Testimonials uses the swiper carousel to display the list of slides/images of latest winning screenshots
* Auth-stage holds all user related pages components and side menus, both before and after authentication
* _shared holds all of the components, overlays, and modals that are used on more than one or even every page
* sports-categories holds all of the available product categories and
* Nested under each category in sports-categories are the affiliated **for purchase data-table pages**
* user-tickets is the user trouble ticket area for users to make requests for changes, bug reports, user issues
* admin-dashboard is the control panel for admins of the app to see current members trouble tickets, see all existing members, admin functions **(todo)** to create reports on usage/activity, other reports and graphs)

## Table of Contents

* [rankfantasysports](#rankfantasysports)
  * [Rank Fantasy $ports&trade; PWA](#rank*fantasy-portstrade-pwa)
    * [Tech Stack](#tech-stack)
  * [Structure of App](#structure-of-app)
  * [Table of Contents](#table-of-contents)
  * [Installation](#installation)
  * [Documentation](#documentation)
  * [Contributing](#contributing)
  * [Contributors/People](#contributorspeople)
  * [Support](#support)

## Installation

1. Obtain Repo

    Clone this repo to your local machine using

    ```shell
    git clone https://github.com/apsistec/rfs
    ```

2. Setup

    1. **Install App code via npm**

        ```shell
        npm install
        ```

    2. **Install Cloud Functions**

        1. Verify correct Service Account Key (accountServiceKey.json) is set in the /functions directory, else create a new Service Account Key by going to [Firebase Admin SDK Settings](https://console.firebase.google.com/project/rankfantasysports-test/settings/serviceaccounts/adminsdk) to create a new one

        2. Verify the correct Stripe Secret Key (Test vs. Live) is configured (from the Stripe account dashoard)

            ```shell
            cd functions
            firebase functions:config:get
            firebase functions:config:set
            ```

        3. Verify the correct Stripe Webhook Key (Test vs. Live) is configured (from the Stripe account dashoard)

            ```shell
            cd functions
            firebase functions:config:get
            firebase functions:config:set
            ```

        4. CD back to app directory

            ```shell
            npm i
            cd ..
            ```

3. Attach Firebase Project to App

    1. Attach Firebase Project

        ```shell
        firebase use --add
        ```

    2. Initialize Firebase

        ```shell
        firebase init
        ```

    3. Deploy Firebase Locally (Emulator) -or- Live Testing Server (depending on state)

        1. Emulator (local server)

            ```shell
            firebase emulators:start --only functions
            firebase serve
            ```

        2. Firebase Servers (live testing server)

            ```shell
            firebase deploy --only functions
            firebase deploy --only hosting
            firebase deploy
            ```

4. Start App Server

      Start Ionic Server with *local lab flag for viewing emulated view of Android and iPhone view** and **DevApp flag for testing on physical mobile devices that are currently on local network** *(must have DevApp App installed on devices)*

    ```shell
    ionic serve -l --devApp
    ```

## Documentation

Start Documentation Server

  ``` shell
  npm run compodoc
  ```

## Contributing

> To get started...

**Step 1** Install Repo
  
* [ ] **Option :one:**
  
  :trident: Fork this repo:

    ```http
  https://github.com/apsistec/rfs
  ```

* [ ] **Option :two:**
  
  Clone this repo to your local machine:

    ```shell
  git clone https://github.com/apsistec/rfs.git
  ```

**Step 2** Code your Code

* [ ] **Option :one:**

  Add previously approved **new code**

  ``` js
    baz = foo(bar) * foo(bar)
    betterBaz = foo(bar^2)
  ```

 -or-

* [ ] **Option :two:**

  :mag:Find then :wrench:work on the previously approved **changes** and/or **refactoring code**

    ``` js
      newFoo(bar2)
      fooBar(newBaz)
    ```

**Step 3** Pull Request

* [ ] 🔃 **Create a Pull Request at**

  ```http
  https://github.com/Apsistec/rfs/pulls
  ```

**Step 4**  Submit for Review and Acceptance

* [ ] Submit! :beer:

## Contributors/People

![**Apsistec**](https://avatars0.githubusercontent.com/u/6438623?s=400&u=aaaf57f08f5fff530672ecd3a18f26a53f704850&v=4)

## Support

> Reach me at any of the following :link:sites:

* [RF$&trade; Support Page](https://rankfantasysports.com/user)
* [Facebook Page](https://fb.me/rankfantasysports)
* [Twitter Channel](http://twitter.com/rankfsports)
* [Instagram Page](https://www.instagram.com/rankfsports)
* [Youtube Channel](https://www.youtube.com/channel/UCxhm1g7GjuwkVWRrdpcZbcg)
* [Slack Channnel](https://rankfantasysports.slack.com)

***

Copyright 2019 © [RankFantasySports](http://rankfantasysports.com)
