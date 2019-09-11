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
                                <a href="modules/AdminDashboardPageModule.html" data-type="entity-link">AdminDashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminDashboardPageModule-8321077ea3e72eedfd76c8b24e3e1132"' : 'data-target="#xs-components-links-module-AdminDashboardPageModule-8321077ea3e72eedfd76c8b24e3e1132"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminDashboardPageModule-8321077ea3e72eedfd76c8b24e3e1132"' :
                                            'id="xs-components-links-module-AdminDashboardPageModule-8321077ea3e72eedfd76c8b24e3e1132"' }>
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
                                            'data-target="#components-links-module-AppModule-c6180fe4afcdbc93c0f97b4118575e39"' : 'data-target="#xs-components-links-module-AppModule-c6180fe4afcdbc93c0f97b4118575e39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c6180fe4afcdbc93c0f97b4118575e39"' :
                                            'id="xs-components-links-module-AppModule-c6180fe4afcdbc93c0f97b4118575e39"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LaunchpageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LaunchpageComponent</a>
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
                                            'data-target="#components-links-module-AuthPageModule-9ab68bc761ff2ad4db28c62a8ef29317"' : 'data-target="#xs-components-links-module-AuthPageModule-9ab68bc761ff2ad4db28c62a8ef29317"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthPageModule-9ab68bc761ff2ad4db28c62a8ef29317"' :
                                            'id="xs-components-links-module-AuthPageModule-9ab68bc761ff2ad4db28c62a8ef29317"' }>
                                            <li class="link">
                                                <a href="components/AuthPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaypalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaypalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerifyEmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyEmailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CfbPageModule.html" data-type="entity-link">CfbPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CfbPageModule-72d1a27a6b14d6ec7fca2b4bcc307523"' : 'data-target="#xs-components-links-module-CfbPageModule-72d1a27a6b14d6ec7fca2b4bcc307523"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CfbPageModule-72d1a27a6b14d6ec7fca2b4bcc307523"' :
                                            'id="xs-components-links-module-CfbPageModule-72d1a27a6b14d6ec7fca2b4bcc307523"' }>
                                            <li class="link">
                                                <a href="components/CfbPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CfbPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FaqPageModule.html" data-type="entity-link">FaqPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FaqPageModule-9186dd6363bffc8fd24c40a858e494f9"' : 'data-target="#xs-components-links-module-FaqPageModule-9186dd6363bffc8fd24c40a858e494f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FaqPageModule-9186dd6363bffc8fd24c40a858e494f9"' :
                                            'id="xs-components-links-module-FaqPageModule-9186dd6363bffc8fd24c40a858e494f9"' }>
                                            <li class="link">
                                                <a href="components/FaqPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FaqPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FifaPageModule.html" data-type="entity-link">FifaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FifaPageModule-fe1b591d11d74afe4107d34f1886c8e6"' : 'data-target="#xs-components-links-module-FifaPageModule-fe1b591d11d74afe4107d34f1886c8e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FifaPageModule-fe1b591d11d74afe4107d34f1886c8e6"' :
                                            'id="xs-components-links-module-FifaPageModule-fe1b591d11d74afe4107d34f1886c8e6"' }>
                                            <li class="link">
                                                <a href="components/FifaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FifaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FreeTrialLoginPageModule.html" data-type="entity-link">FreeTrialLoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FreeTrialLoginPageModule-cdce69fe920b2a74b3daa1af402a9c56"' : 'data-target="#xs-components-links-module-FreeTrialLoginPageModule-cdce69fe920b2a74b3daa1af402a9c56"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FreeTrialLoginPageModule-cdce69fe920b2a74b3daa1af402a9c56"' :
                                            'id="xs-components-links-module-FreeTrialLoginPageModule-cdce69fe920b2a74b3daa1af402a9c56"' }>
                                            <li class="link">
                                                <a href="components/FreeTrialLoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FreeTrialLoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FreeTrialPageModule.html" data-type="entity-link">FreeTrialPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FreeTrialPageModule-340ea618ef0b7dba2c7b378e7278aba8"' : 'data-target="#xs-components-links-module-FreeTrialPageModule-340ea618ef0b7dba2c7b378e7278aba8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FreeTrialPageModule-340ea618ef0b7dba2c7b378e7278aba8"' :
                                            'id="xs-components-links-module-FreeTrialPageModule-340ea618ef0b7dba2c7b378e7278aba8"' }>
                                            <li class="link">
                                                <a href="components/FreeTrialPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FreeTrialPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-f710e71445504a03bb7d95061d7768fb"' : 'data-target="#xs-components-links-module-HomePageModule-f710e71445504a03bb7d95061d7768fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-f710e71445504a03bb7d95061d7768fb"' :
                                            'id="xs-components-links-module-HomePageModule-f710e71445504a03bb7d95061d7768fb"' }>
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
                                            'data-target="#components-links-module-HowToPageModule-b81b7cb03b4253a4cc8e2f03b094627a"' : 'data-target="#xs-components-links-module-HowToPageModule-b81b7cb03b4253a4cc8e2f03b094627a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HowToPageModule-b81b7cb03b4253a4cc8e2f03b094627a"' :
                                            'id="xs-components-links-module-HowToPageModule-b81b7cb03b4253a4cc8e2f03b094627a"' }>
                                            <li class="link">
                                                <a href="components/HowToPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HowToPage</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="modules/ListAppRoutingModule.html" data-type="entity-link">ListAppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListPageModule.html" data-type="entity-link">ListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListPageModule-3646cb635fa5611c2c03e8f8ccafe70c"' : 'data-target="#xs-components-links-module-ListPageModule-3646cb635fa5611c2c03e8f8ccafe70c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListPageModule-3646cb635fa5611c2c03e8f8ccafe70c"' :
                                            'id="xs-components-links-module-ListPageModule-3646cb635fa5611c2c03e8f8ccafe70c"' }>
                                            <li class="link">
                                                <a href="components/ListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NflPreComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NflPreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NflScoreComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NflScoreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NflWeekComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NflWeekComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PgaStatsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PgaStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PgaThisWeekComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PgaThisWeekComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PowerRankingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PowerRankingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScorePredictionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScorePredictionsComponent</a>
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
                                <a href="modules/MlbPageModule.html" data-type="entity-link">MlbPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MlbPageModule-0554767773ad262aec7b6a6bb33843b6"' : 'data-target="#xs-components-links-module-MlbPageModule-0554767773ad262aec7b6a6bb33843b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MlbPageModule-0554767773ad262aec7b6a6bb33843b6"' :
                                            'id="xs-components-links-module-MlbPageModule-0554767773ad262aec7b6a6bb33843b6"' }>
                                            <li class="link">
                                                <a href="components/MlbPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MlbPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NbaPageModule.html" data-type="entity-link">NbaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NbaPageModule-0b69b5ff6e38fe136a63130b11ad2a99"' : 'data-target="#xs-components-links-module-NbaPageModule-0b69b5ff6e38fe136a63130b11ad2a99"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NbaPageModule-0b69b5ff6e38fe136a63130b11ad2a99"' :
                                            'id="xs-components-links-module-NbaPageModule-0b69b5ff6e38fe136a63130b11ad2a99"' }>
                                            <li class="link">
                                                <a href="components/NbaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NbaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NflPageModule.html" data-type="entity-link">NflPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NflPageModule-4854ab05536a80af65ff88b8bb6f8e25"' : 'data-target="#xs-components-links-module-NflPageModule-4854ab05536a80af65ff88b8bb6f8e25"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NflPageModule-4854ab05536a80af65ff88b8bb6f8e25"' :
                                            'id="xs-components-links-module-NflPageModule-4854ab05536a80af65ff88b8bb6f8e25"' }>
                                            <li class="link">
                                                <a href="components/NflPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NflPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NowPageModule.html" data-type="entity-link">NowPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NowPageModule-349d6090f4eed5217058f94e0749dbe1"' : 'data-target="#xs-components-links-module-NowPageModule-349d6090f4eed5217058f94e0749dbe1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NowPageModule-349d6090f4eed5217058f94e0749dbe1"' :
                                            'id="xs-components-links-module-NowPageModule-349d6090f4eed5217058f94e0749dbe1"' }>
                                            <li class="link">
                                                <a href="components/NowPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NowPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PgaPageModule.html" data-type="entity-link">PgaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PgaPageModule-5aa70fd5dcd0569d14e01589cbb789fd"' : 'data-target="#xs-components-links-module-PgaPageModule-5aa70fd5dcd0569d14e01589cbb789fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PgaPageModule-5aa70fd5dcd0569d14e01589cbb789fd"' :
                                            'id="xs-components-links-module-PgaPageModule-5aa70fd5dcd0569d14e01589cbb789fd"' }>
                                            <li class="link">
                                                <a href="components/PgaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PgaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PricingPageModule.html" data-type="entity-link">PricingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PricingPageModule-d7af8ed4a58945dc3f4f7b7a10b0f1a8"' : 'data-target="#xs-components-links-module-PricingPageModule-d7af8ed4a58945dc3f4f7b7a10b0f1a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PricingPageModule-d7af8ed4a58945dc3f4f7b7a10b0f1a8"' :
                                            'id="xs-components-links-module-PricingPageModule-d7af8ed4a58945dc3f4f7b7a10b0f1a8"' }>
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
                                            'data-target="#components-links-module-ProfilePageModule-6c9e65fb6b194d105a3a711cd1ba64e4"' : 'data-target="#xs-components-links-module-ProfilePageModule-6c9e65fb6b194d105a3a711cd1ba64e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-6c9e65fb6b194d105a3a711cd1ba64e4"' :
                                            'id="xs-components-links-module-ProfilePageModule-6c9e65fb6b194d105a3a711cd1ba64e4"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SupportModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link">SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsPageModule-4e1bac1aadf4dcb75fa6d1d8e7ead61a"' : 'data-target="#xs-components-links-module-SettingsPageModule-4e1bac1aadf4dcb75fa6d1d8e7ead61a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-4e1bac1aadf4dcb75fa6d1d8e7ead61a"' :
                                            'id="xs-components-links-module-SettingsPageModule-4e1bac1aadf4dcb75fa6d1d8e7ead61a"' }>
                                            <li class="link">
                                                <a href="components/SettingsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-21becb23569cbd06536ec4b69e53bc33"' : 'data-target="#xs-components-links-module-SharedModule-21becb23569cbd06536ec4b69e53bc33"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-21becb23569cbd06536ec4b69e53bc33"' :
                                            'id="xs-components-links-module-SharedModule-21becb23569cbd06536ec4b69e53bc33"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListTablesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListTablesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrivacyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrivacyDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TermsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TermsDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-21becb23569cbd06536ec4b69e53bc33"' : 'data-target="#xs-directives-links-module-SharedModule-21becb23569cbd06536ec4b69e53bc33"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-21becb23569cbd06536ec4b69e53bc33"' :
                                        'id="xs-directives-links-module-SharedModule-21becb23569cbd06536ec4b69e53bc33"' }>
                                        <li class="link">
                                            <a href="directives/DropdownDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropdownDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SubmitIfValidDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubmitIfValidDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SportsCategoriesPageModule.html" data-type="entity-link">SportsCategoriesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SportsCategoriesPageModule-34120b03c2dd3e721c67778e6103c3fd"' : 'data-target="#xs-components-links-module-SportsCategoriesPageModule-34120b03c2dd3e721c67778e6103c3fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SportsCategoriesPageModule-34120b03c2dd3e721c67778e6103c3fd"' :
                                            'id="xs-components-links-module-SportsCategoriesPageModule-34120b03c2dd3e721c67778e6103c3fd"' }>
                                            <li class="link">
                                                <a href="components/SportsCategoriesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SportsCategoriesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TennisPageModule.html" data-type="entity-link">TennisPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TennisPageModule-7128fd6d95e82419889f9ed8cd83e89b"' : 'data-target="#xs-components-links-module-TennisPageModule-7128fd6d95e82419889f9ed8cd83e89b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TennisPageModule-7128fd6d95e82419889f9ed8cd83e89b"' :
                                            'id="xs-components-links-module-TennisPageModule-7128fd6d95e82419889f9ed8cd83e89b"' }>
                                            <li class="link">
                                                <a href="components/TennisPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TennisPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonialsPageModule.html" data-type="entity-link">TestimonialsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestimonialsPageModule-29c52bf9596378f592be14d10d33fa66"' : 'data-target="#xs-components-links-module-TestimonialsPageModule-29c52bf9596378f592be14d10d33fa66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestimonialsPageModule-29c52bf9596378f592be14d10d33fa66"' :
                                            'id="xs-components-links-module-TestimonialsPageModule-29c52bf9596378f592be14d10d33fa66"' }>
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
                                <a href="modules/UserTicketPageModule.html" data-type="entity-link">UserTicketPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserTicketPageModule-ccb38abbbd20461a0753217e75c24b1c"' : 'data-target="#xs-components-links-module-UserTicketPageModule-ccb38abbbd20461a0753217e75c24b1c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserTicketPageModule-ccb38abbbd20461a0753217e75c24b1c"' :
                                            'id="xs-components-links-module-UserTicketPageModule-ccb38abbbd20461a0753217e75c24b1c"' }>
                                            <li class="link">
                                                <a href="components/UserTicketPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserTicketPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomePageModule.html" data-type="entity-link">WelcomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WelcomePageModule-cb956483cc8000bc69cdd2b1d28101d8"' : 'data-target="#xs-components-links-module-WelcomePageModule-cb956483cc8000bc69cdd2b1d28101d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomePageModule-cb956483cc8000bc69cdd2b1d28101d8"' :
                                            'id="xs-components-links-module-WelcomePageModule-cb956483cc8000bc69cdd2b1d28101d8"' }>
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
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ProfilePage.html" data-type="entity-link">ProfilePage</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsPage.html" data-type="entity-link">SettingsPage</a>
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
                                <a href="classes/FAQ.html" data-type="entity-link">FAQ</a>
                            </li>
                            <li class="link">
                                <a href="classes/Request.html" data-type="entity-link">Request</a>
                            </li>
                            <li class="link">
                                <a href="classes/Slide.html" data-type="entity-link">Slide</a>
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
                                    <a href="injectables/DbService.html" data-type="entity-link">DbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link">MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link">ThemeService</a>
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
                                <a href="guards/InnerGuard.html" data-type="entity-link">InnerGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PaidGuard.html" data-type="entity-link">PaidGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/TutorialGuard.html" data-type="entity-link">TutorialGuard</a>
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
                                <a href="interfaces/Image.html" data-type="entity-link">Image</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Profile.html" data-type="entity-link">Profile</a>
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