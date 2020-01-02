'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/favicon.png> 
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminDashboardPageModule.html" data-type="entity-link">AdminDashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminDashboardPageModule-ac64a6f9d64fc796a25ce7dd2f7837f8"' : 'data-target="#xs-components-links-module-AdminDashboardPageModule-ac64a6f9d64fc796a25ce7dd2f7837f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminDashboardPageModule-ac64a6f9d64fc796a25ce7dd2f7837f8"' :
                                            'id="xs-components-links-module-AdminDashboardPageModule-ac64a6f9d64fc796a25ce7dd2f7837f8"' }>
                                            <li class="link">
                                                <a href="components/AdminDashboardPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminDashboardPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1a2f34884ce2e1e7558ac75f86d52977"' : 'data-target="#xs-components-links-module-AppModule-1a2f34884ce2e1e7558ac75f86d52977"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1a2f34884ce2e1e7558ac75f86d52977"' :
                                            'id="xs-components-links-module-AppModule-1a2f34884ce2e1e7558ac75f86d52977"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DetailPageModule.html" data-type="entity-link">DetailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailPageModule-5275da52ab5438703cf48371b01b2867"' : 'data-target="#xs-components-links-module-DetailPageModule-5275da52ab5438703cf48371b01b2867"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailPageModule-5275da52ab5438703cf48371b01b2867"' :
                                            'id="xs-components-links-module-DetailPageModule-5275da52ab5438703cf48371b01b2867"' }>
                                            <li class="link">
                                                <a href="components/DetailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailPageRoutingModule.html" data-type="entity-link">DetailPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FaqPageModule.html" data-type="entity-link">FaqPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FaqPageModule-fedc4a88aaf397934416a3f4a12d942a"' : 'data-target="#xs-components-links-module-FaqPageModule-fedc4a88aaf397934416a3f4a12d942a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FaqPageModule-fedc4a88aaf397934416a3f4a12d942a"' :
                                            'id="xs-components-links-module-FaqPageModule-fedc4a88aaf397934416a3f4a12d942a"' }>
                                            <li class="link">
                                                <a href="components/FaqPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FaqPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPasswordPageModule.html" data-type="entity-link">ForgotPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForgotPasswordPageModule-039dfacce170bece5462a2c383e68b1e"' : 'data-target="#xs-components-links-module-ForgotPasswordPageModule-039dfacce170bece5462a2c383e68b1e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForgotPasswordPageModule-039dfacce170bece5462a2c383e68b1e"' :
                                            'id="xs-components-links-module-ForgotPasswordPageModule-039dfacce170bece5462a2c383e68b1e"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-d595453b69993d9ab7f0619969896698"' : 'data-target="#xs-components-links-module-HomePageModule-d595453b69993d9ab7f0619969896698"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-d595453b69993d9ab7f0619969896698"' :
                                            'id="xs-components-links-module-HomePageModule-d595453b69993d9ab7f0619969896698"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HowToPageModule.html" data-type="entity-link">HowToPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HowToPageModule-6089d1a01634461f862fe2b54bf1d3e9"' : 'data-target="#xs-components-links-module-HowToPageModule-6089d1a01634461f862fe2b54bf1d3e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HowToPageModule-6089d1a01634461f862fe2b54bf1d3e9"' :
                                            'id="xs-components-links-module-HowToPageModule-6089d1a01634461f862fe2b54bf1d3e9"' }>
                                            <li class="link">
                                                <a href="components/HowToPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HowToPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-7841ba1cf6b2099bc3c2a817cb3306d2"' : 'data-target="#xs-components-links-module-LoginPageModule-7841ba1cf6b2099bc3c2a817cb3306d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-7841ba1cf6b2099bc3c2a817cb3306d2"' :
                                            'id="xs-components-links-module-LoginPageModule-7841ba1cf6b2099bc3c2a817cb3306d2"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PricingPageModule.html" data-type="entity-link">PricingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PricingPageModule-3ea256b462a8ddd32b1a79341c4a0703"' : 'data-target="#xs-components-links-module-PricingPageModule-3ea256b462a8ddd32b1a79341c4a0703"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PricingPageModule-3ea256b462a8ddd32b1a79341c4a0703"' :
                                            'id="xs-components-links-module-PricingPageModule-3ea256b462a8ddd32b1a79341c4a0703"' }>
                                            <li class="link">
                                                <a href="components/PricingPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PricingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link">ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-86a719974f4b44796afc93a54b2fac2f"' : 'data-target="#xs-components-links-module-ProfilePageModule-86a719974f4b44796afc93a54b2fac2f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-86a719974f4b44796afc93a54b2fac2f"' :
                                            'id="xs-components-links-module-ProfilePageModule-86a719974f4b44796afc93a54b2fac2f"' }>
                                            <li class="link">
                                                <a href="components/CancelSubscriptionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CancelSubscriptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoicesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InvoicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PurchasePageModule.html" data-type="entity-link">PurchasePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PurchasePageModule-ed3e3bc0f1b49a760fb49d7856442264"' : 'data-target="#xs-components-links-module-PurchasePageModule-ed3e3bc0f1b49a760fb49d7856442264"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PurchasePageModule-ed3e3bc0f1b49a760fb49d7856442264"' :
                                            'id="xs-components-links-module-PurchasePageModule-ed3e3bc0f1b49a760fb49d7856442264"' }>
                                            <li class="link">
                                                <a href="components/PurchasePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PurchasePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageModule.html" data-type="entity-link">RegisterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterPageModule-51f52f5cf55ee941ca046d5fb0dd9856"' : 'data-target="#xs-components-links-module-RegisterPageModule-51f52f5cf55ee941ca046d5fb0dd9856"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterPageModule-51f52f5cf55ee941ca046d5fb0dd9856"' :
                                            'id="xs-components-links-module-RegisterPageModule-51f52f5cf55ee941ca046d5fb0dd9856"' }>
                                            <li class="link">
                                                <a href="components/RegisterPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link">SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsPageModule-b237cd39b06d53e7a11ec0c1fa2a1c71"' : 'data-target="#xs-components-links-module-SettingsPageModule-b237cd39b06d53e7a11ec0c1fa2a1c71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-b237cd39b06d53e7a11ec0c1fa2a1c71"' :
                                            'id="xs-components-links-module-SettingsPageModule-b237cd39b06d53e7a11ec0c1fa2a1c71"' }>
                                            <li class="link">
                                                <a href="components/SettingsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedDirectivesModule.html" data-type="entity-link">SharedDirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedDirectivesModule-c9591b6e796afdf4fced52d20095c150"' : 'data-target="#xs-directives-links-module-SharedDirectivesModule-c9591b6e796afdf4fced52d20095c150"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedDirectivesModule-c9591b6e796afdf4fced52d20095c150"' :
                                        'id="xs-directives-links-module-SharedDirectivesModule-c9591b6e796afdf4fced52d20095c150"' }>
                                        <li class="link">
                                            <a href="directives/HasPermissionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">HasPermissionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SubmitIfValidDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubmitIfValidDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-950f056491ac8be3a298b38cfce341ee"' : 'data-target="#xs-components-links-module-SharedModule-950f056491ac8be3a298b38cfce341ee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-950f056491ac8be3a298b38cfce341ee"' :
                                            'id="xs-components-links-module-SharedModule-950f056491ac8be3a298b38cfce341ee"' }>
                                            <li class="link">
                                                <a href="components/CfbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CfbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NbaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NbaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NflComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NflComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PgaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PgaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopoverComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrivacyDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TennisComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TennisComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TermsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TicketComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TicketComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SportsCategoriesPageModule.html" data-type="entity-link">SportsCategoriesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SportsCategoriesPageModule-f421713e01b833dfa67570e7773b9e59"' : 'data-target="#xs-components-links-module-SportsCategoriesPageModule-f421713e01b833dfa67570e7773b9e59"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SportsCategoriesPageModule-f421713e01b833dfa67570e7773b9e59"' :
                                            'id="xs-components-links-module-SportsCategoriesPageModule-f421713e01b833dfa67570e7773b9e59"' }>
                                            <li class="link">
                                                <a href="components/SportsCategoriesDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SportsCategoriesDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SportsCategoriesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SportsCategoriesPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SportsTablesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SportsTablesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonialsPageModule.html" data-type="entity-link">TestimonialsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestimonialsPageModule-d35a24faae8c11899ce9dd61a986d93b"' : 'data-target="#xs-components-links-module-TestimonialsPageModule-d35a24faae8c11899ce9dd61a986d93b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestimonialsPageModule-d35a24faae8c11899ce9dd61a986d93b"' :
                                            'id="xs-components-links-module-TestimonialsPageModule-d35a24faae8c11899ce9dd61a986d93b"' }>
                                            <li class="link">
                                                <a href="components/TestimonialsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimonialsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestPageModule.html" data-type="entity-link">TestPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestPageModule-920b4cc55e583deb0de0f3ee5e01ac60"' : 'data-target="#xs-components-links-module-TestPageModule-920b4cc55e583deb0de0f3ee5e01ac60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestPageModule-920b4cc55e583deb0de0f3ee5e01ac60"' :
                                            'id="xs-components-links-module-TestPageModule-920b4cc55e583deb0de0f3ee5e01ac60"' }>
                                            <li class="link">
                                                <a href="components/TestPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestPageRoutingModule.html" data-type="entity-link">TestPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TweetsPageModule.html" data-type="entity-link">TweetsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TweetsPageModule-00716191ecc1dfcd02ff8a8eee8226ff"' : 'data-target="#xs-components-links-module-TweetsPageModule-00716191ecc1dfcd02ff8a8eee8226ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TweetsPageModule-00716191ecc1dfcd02ff8a8eee8226ff"' :
                                            'id="xs-components-links-module-TweetsPageModule-00716191ecc1dfcd02ff8a8eee8226ff"' }>
                                            <li class="link">
                                                <a href="components/TweetsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TweetsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserTicketsPageModule.html" data-type="entity-link">UserTicketsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserTicketsPageModule-9724d654bbbc383dfa9f885d7e0a44ef"' : 'data-target="#xs-components-links-module-UserTicketsPageModule-9724d654bbbc383dfa9f885d7e0a44ef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserTicketsPageModule-9724d654bbbc383dfa9f885d7e0a44ef"' :
                                            'id="xs-components-links-module-UserTicketsPageModule-9724d654bbbc383dfa9f885d7e0a44ef"' }>
                                            <li class="link">
                                                <a href="components/UserTicketsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserTicketsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyEmailPageModule.html" data-type="entity-link">VerifyEmailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerifyEmailPageModule-82c9712e16a36ff5868cfb7a625d74e7"' : 'data-target="#xs-components-links-module-VerifyEmailPageModule-82c9712e16a36ff5868cfb7a625d74e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerifyEmailPageModule-82c9712e16a36ff5868cfb7a625d74e7"' :
                                            'id="xs-components-links-module-VerifyEmailPageModule-82c9712e16a36ff5868cfb7a625d74e7"' }>
                                            <li class="link">
                                                <a href="components/VerifyEmailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyEmailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomePageModule.html" data-type="entity-link">WelcomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WelcomePageModule-b71895915b3dca197e808059759a0e27"' : 'data-target="#xs-components-links-module-WelcomePageModule-b71895915b3dca197e808059759a0e27"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomePageModule-b71895915b3dca197e808059759a0e27"' :
                                            'id="xs-components-links-module-WelcomePageModule-b71895915b3dca197e808059759a0e27"' }>
                                            <li class="link">
                                                <a href="components/WelcomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WelcomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/SubmitIfValidDirective.html" data-type="entity-link">SubmitIfValidDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderUserInfo.html" data-type="entity-link">ProviderUserInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link">DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GraphService.html" data-type="entity-link">GraphService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link">MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MsalaService.html" data-type="entity-link">MsalaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StripeService.html" data-type="entity-link">StripeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link">ThemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TicketService.html" data-type="entity-link">TicketService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/InterceptorService.html" data-type="entity-link">InterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanDeactivateGuard.html" data-type="entity-link">CanDeactivateGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/InnerRoutesGuard.html" data-type="entity-link">InnerRoutesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PaidMemberGuard.html" data-type="entity-link">PaidMemberGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PreventBuyGuard.html" data-type="entity-link">PreventBuyGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CanComponentDeactivate.html" data-type="entity-link">CanComponentDeactivate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FAQ.html" data-type="entity-link">FAQ</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Slide.html" data-type="entity-link">Slide</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});