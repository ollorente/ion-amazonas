import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DevelopmentPage } from '../pages/development/development';
import { AboutPage } from '../pages/about/about';
import { HelpPage } from '../pages/help/help';
import { LoginPage } from '../pages/login/login';
import { LogupPage } from '../pages/logup/logup';
import { PrivacyPage } from '../pages/privacy/privacy';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    DevelopmentPage,
    HelpPage,
    LoginPage,
    LogupPage,
    PrivacyPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    DevelopmentPage,
    HelpPage,
    LoginPage,
    LogupPage,
    PrivacyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
