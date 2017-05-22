import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserDetailsPage } from '../user-details/user-details';

import { User } from '../../models/user';

import { GithubUsersProvider } from '../../providers/github-users/github-users';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]
  
  constructor(
    public navCtrl: NavController,
    private githubUsers: GithubUsersProvider
  ) {
    githubUsers.load().subscribe(users => {
      // console.log(users)
      this.users = users;
    })
  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }
  
  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }
}