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
                                            'data-target="#components-links-module-AppModule-9d449f6e9100bbd6aac8157060279afb"' : 'data-target="#xs-components-links-module-AppModule-9d449f6e9100bbd6aac8157060279afb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9d449f6e9100bbd6aac8157060279afb"' :
                                            'id="xs-components-links-module-AppModule-9d449f6e9100bbd6aac8157060279afb"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthPageModule.html" data-type="entity-link">AuthPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthPageModule-aef2ac91c841d48f25028c9ff12238a1"' : 'data-target="#xs-components-links-module-AuthPageModule-aef2ac91c841d48f25028c9ff12238a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthPageModule-aef2ac91c841d48f25028c9ff12238a1"' :
                                            'id="xs-components-links-module-AuthPageModule-aef2ac91c841d48f25028c9ff12238a1"' }>
                                            <li class="link">
                                                <a href="components/AuthPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
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
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-2f3f803832bc084cf871d68b85462010"' : 'data-target="#xs-components-links-module-HomeModule-2f3f803832bc084cf871d68b85462010"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-2f3f803832bc084cf871d68b85462010"' :
                                            'id="xs-components-links-module-HomeModule-2f3f803832bc084cf871d68b85462010"' }>
                                            <li class="link">
                                                <a href="components/LaunchPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LaunchPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaypalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaypalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ImageModalPageModule.html" data-type="entity-link">ImageModalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ImageModalPageModule-577bcd8d0818d73856e6e9f6c46f8c25"' : 'data-target="#xs-components-links-module-ImageModalPageModule-577bcd8d0818d73856e6e9f6c46f8c25"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ImageModalPageModule-577bcd8d0818d73856e6e9f6c46f8c25"' :
                                            'id="xs-components-links-module-ImageModalPageModule-577bcd8d0818d73856e6e9f6c46f8c25"' }>
                                            <li class="link">
                                                <a href="components/ImageModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageModalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListPageModule.html" data-type="entity-link">ListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListPageModule-522e1b5f261566d22f2aa571f44ff266"' : 'data-target="#xs-components-links-module-ListPageModule-522e1b5f261566d22f2aa571f44ff266"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListPageModule-522e1b5f261566d22f2aa571f44ff266"' :
                                            'id="xs-components-links-module-ListPageModule-522e1b5f261566d22f2aa571f44ff266"' }>
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
                                <a href="modules/ModalModule.html" data-type="entity-link">ModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalModule-5eac3ee56d4c8a85dda43faf8121938a"' : 'data-target="#xs-components-links-module-ModalModule-5eac3ee56d4c8a85dda43faf8121938a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalModule-5eac3ee56d4c8a85dda43faf8121938a"' :
                                            'id="xs-components-links-module-ModalModule-5eac3ee56d4c8a85dda43faf8121938a"' }>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
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
                                            'data-target="#components-links-module-SharedModule-3f3caae05d7333d71ab8fdfdb2142840"' : 'data-target="#xs-components-links-module-SharedModule-3f3caae05d7333d71ab8fdfdb2142840"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3f3caae05d7333d71ab8fdfdb2142840"' :
                                            'id="xs-components-links-module-SharedModule-3f3caae05d7333d71ab8fdfdb2142840"' }>
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
                                <a href="modules/StatsPageModule.html" data-type="entity-link">StatsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatsPageModule-8de5ef0234c75d1fb632a9cbbccaac5c"' : 'data-target="#xs-components-links-module-StatsPageModule-8de5ef0234c75d1fb632a9cbbccaac5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatsPageModule-8de5ef0234c75d1fb632a9cbbccaac5c"' :
                                            'id="xs-components-links-module-StatsPageModule-8de5ef0234c75d1fb632a9cbbccaac5c"' }>
                                            <li class="link">
                                                <a href="components/GolfComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GolfComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SoccerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SoccerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatsPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TennisComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TennisComponent</a>
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
                                <a href="modules/TweetsPageModule.html" data-type="entity-link">TweetsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TweetsPageModule-75149b3fd2a5632881a69312c7cb5ea9"' : 'data-target="#xs-components-links-module-TweetsPageModule-75149b3fd2a5632881a69312c7cb5ea9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TweetsPageModule-75149b3fd2a5632881a69312c7cb5ea9"' :
                                            'id="xs-components-links-module-TweetsPageModule-75149b3fd2a5632881a69312c7cb5ea9"' }>
                                            <li class="link">
                                                <a href="components/TweetsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TweetsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/XstatsPageModule.html" data-type="entity-link">XstatsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-XstatsPageModule-c7f3d683d02e19f7ee07da1857db61be"' : 'data-target="#xs-components-links-module-XstatsPageModule-c7f3d683d02e19f7ee07da1857db61be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-XstatsPageModule-c7f3d683d02e19f7ee07da1857db61be"' :
                                            'id="xs-components-links-module-XstatsPageModule-c7f3d683d02e19f7ee07da1857db61be"' }>
                                            <li class="link">
                                                <a href="components/XstatsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">XstatsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link">ForgotPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomePage.html" data-type="entity-link">HomePage</a>
                            </li>
                            <li class="link">
                                <a href="components/LaunchPageComponent.html" data-type="entity-link">LaunchPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoaderDddComponent.html" data-type="entity-link">LoaderDddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link">LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaypalComponent.html" data-type="entity-link">PaypalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterComponent.html" data-type="entity-link">RegisterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SupportModalComponent.html" data-type="entity-link">SupportModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VerifyEmailComponent.html" data-type="entity-link">VerifyEmailComponent</a>
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
                                <a href="classes/Active.html" data-type="entity-link">Active</a>
                            </li>
                            <li class="link">
                                <a href="classes/DecorativePreloadingStrategy.html" data-type="entity-link">DecorativePreloadingStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/FAQ.html" data-type="entity-link">FAQ</a>
                            </li>
                            <li class="link">
                                <a href="classes/Request.html" data-type="entity-link">Request</a>
                            </li>
                            <li class="link">
                                <a href="classes/Slide.html" data-type="entity-link">Slide</a>
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
                                    <a href="injectables/CheckForUpdateService.html" data-type="entity-link">CheckForUpdateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpService.html" data-type="entity-link">HttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link">ModalService</a>
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
                                <a href="guards/LoginGuard.html" data-type="entity-link">LoginGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/MsalGuard.html" data-type="entity-link">MsalGuard</a>
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
                                <a href="interfaces/Profile.html" data-type="entity-link">Profile</a>
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