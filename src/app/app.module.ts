import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AboutPage} from '../pages/about/about';
import{ContactPage} from'../pages/contact/contact';
import{RecPage} from '../pages/rec/rec';
import{RecformPage} from '../pages/recform/recform';
import{DomainsPage} from '../pages/domains/domains';
import{AchPage} from '../pages/ach/ach';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    RecPage,
    RecformPage,
    DomainsPage,
    AchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    RecPage,
    RecformPage,
    DomainsPage,
    AchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
