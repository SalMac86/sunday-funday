import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { OrganizationsPage } from '../pages/organizations/organizations';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { UserDetailsPage } from '../pages/user-details/user-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubUsersProvider } from '../providers/github-users/github-users';

let injectables = [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage
  ];

@NgModule({
  declarations: injectables,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injectables,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsersProvider
  ]
})
export class AppModule {}
