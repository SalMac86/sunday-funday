import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';
/*
  Generated class for the GithubUsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsersProvider {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
    console.log('Hello GithubUsersProvider Provider');
  }
  
  
  //this is where we're going to add our method
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
    .map(res => <User[]>res.json());
  }
  
  loadUser(login: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${login}`)
    .map(res => <User>res.json());
  }
}
