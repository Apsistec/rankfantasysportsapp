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
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/rfs-logo-final.png> 
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-39e3af8e46201c2e50f9e792d6270f56"' : 'data-target="#xs-components-links-module-AppModule-39e3af8e46201c2e50f9e792d6270f56"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-39e3af8e46201c2e50f9e792d6270f56"' :
                                            'id="xs-components-links-module-AppModule-39e3af8e46201c2e50f9e792d6270f56"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LaunchPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LaunchPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MembershipsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MembershipsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignInComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscriptionPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubscriptionPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SupportModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerifyEmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyEmailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-39e3af8e46201c2e50f9e792d6270f56"' : 'data-target="#xs-injectables-links-module-AppModule-39e3af8e46201c2e50f9e792d6270f56"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-39e3af8e46201c2e50f9e792d6270f56"' :
                                        'id="xs-injectables-links-module-AppModule-39e3af8e46201c2e50f9e792d6270f56"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CheckForUpdateService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CheckForUpdateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FaqPageModule.html" data-type="entity-link">FaqPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FaqPageModule-3a5920d5d5684f5c13c85f7557b04b2b"' : 'data-target="#xs-components-links-module-FaqPageModule-3a5920d5d5684f5c13c85f7557b04b2b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FaqPageModule-3a5920d5d5684f5c13c85f7557b04b2b"' :
                                            'id="xs-components-links-module-FaqPageModule-3a5920d5d5684f5c13c85f7557b04b2b"' }>
                                            <li class="link">
                                                <a href="components/FaqPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FaqPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-9a352f7c241bb562d5dc3d5f2b856b9c"' : 'data-target="#xs-components-links-module-HomePageModule-9a352f7c241bb562d5dc3d5f2b856b9c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-9a352f7c241bb562d5dc3d5f2b856b9c"' :
                                            'id="xs-components-links-module-HomePageModule-9a352f7c241bb562d5dc3d5f2b856b9c"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListPageModule.html" data-type="entity-link">ListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListPageModule-78510bd3675d544e369078b6b78b597b"' : 'data-target="#xs-components-links-module-ListPageModule-78510bd3675d544e369078b6b78b597b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListPageModule-78510bd3675d544e369078b6b78b597b"' :
                                            'id="xs-components-links-module-ListPageModule-78510bd3675d544e369078b6b78b597b"' }>
                                            <li class="link">
                                                <a href="components/ListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Table1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Table1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Table2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Table2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Table3Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Table3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Table4Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Table4Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Table5Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Table5Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Table6Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Table6Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Table7Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Table7Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Table8Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Table8Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Table9Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Table9Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link">ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-69b0963dcdc55f38bee6aa493f9b1b01"' : 'data-target="#xs-components-links-module-ProfilePageModule-69b0963dcdc55f38bee6aa493f9b1b01"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-69b0963dcdc55f38bee6aa493f9b1b01"' :
                                            'id="xs-components-links-module-ProfilePageModule-69b0963dcdc55f38bee6aa493f9b1b01"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-2bc9ff617c3ed28976432892916215f1"' : 'data-target="#xs-components-links-module-SharedModule-2bc9ff617c3ed28976432892916215f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-2bc9ff617c3ed28976432892916215f1"' :
                                            'id="xs-components-links-module-SharedModule-2bc9ff617c3ed28976432892916215f1"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonialsPageModule.html" data-type="entity-link">TestimonialsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestimonialsPageModule-4ec6ac66ba85b0ae55a9a095a1b4f23f"' : 'data-target="#xs-components-links-module-TestimonialsPageModule-4ec6ac66ba85b0ae55a9a095a1b4f23f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestimonialsPageModule-4ec6ac66ba85b0ae55a9a095a1b4f23f"' :
                                            'id="xs-components-links-module-TestimonialsPageModule-4ec6ac66ba85b0ae55a9a095a1b4f23f"' }>
                                            <li class="link">
                                                <a href="components/TestimonialsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimonialsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TweeterPageModule.html" data-type="entity-link">TweeterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TweeterPageModule-c1b83475e1f31970a2746c3c81e945bc"' : 'data-target="#xs-components-links-module-TweeterPageModule-c1b83475e1f31970a2746c3c81e945bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TweeterPageModule-c1b83475e1f31970a2746c3c81e945bc"' :
                                            'id="xs-components-links-module-TweeterPageModule-c1b83475e1f31970a2746c3c81e945bc"' }>
                                            <li class="link">
                                                <a href="components/TweeterPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TweeterPage</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="classes/Request.html" data-type="entity-link">Request</a>
                            </li>
                            <li class="link">
                                <a href="classes/SupportData.html" data-type="entity-link">SupportData</a>
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
                                    <a href="injectables/CheckForUpdateService.html" data-type="entity-link">CheckForUpdateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link">ThemeService</a>
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
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/InnerGuard.html" data-type="entity-link">InnerGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SigninGuard.html" data-type="entity-link">SigninGuard</a>
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
                                <a href="interfaces/Charge.html" data-type="entity-link">Charge</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer.html" data-type="entity-link">Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Source.html" data-type="entity-link">Source</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StripeObject.html" data-type="entity-link">StripeObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubscriptionPlan.html" data-type="entity-link">SubscriptionPlan</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
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