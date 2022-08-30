import { Injectable } from '@angular/core';
// rxjs
import { merge, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, scan, tap } from 'rxjs/operators';
// users
import { User, UserVm, UserVmFn } from './types/user.types';
import { UserStore } from './types/user.store';

@Injectable({
  providedIn: 'root'
})
export class UserService {



 constructor(private http:HttpClient, private store: UserStore) { }

 addUser(user: User) {
    this.store.addUser(user);
 }
 deleteUser(user: User) {
    this.store.deleteUser(user);
 }
 selectUser(user: User) {
    this.store.selectUser(user);
 }
 updateUser(user: User) {
    this.store.updateUser(user);
 }

}
