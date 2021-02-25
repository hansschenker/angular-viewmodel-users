import { Viewmodel } from './../shared/viewmodel';
import { UserVm } from './types/types';
import { Component, OnInit } from '@angular/core';
// rxjs
import { merge, Observable, Subject } from 'rxjs';
import { map, tap, scan } from "rxjs/operators";
// users
import { User } from "./types/types";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: "./users.component.html",
  styles: [
  ]
})
export class UsersComponent {

 // define observable vm
 public vm$ : Observable<Viewmodel<User>>;
 
 // create action streams
 public addUserState = new Subject<User>();
 public deleteUserSubj = new Subject<User>();
 public detailUserSubj = new Subject<User>();
 public closeDetailSubj = new Subject();

 constructor(private http:HttpClient) {
   // merge action streams into one
   // and track state with the help of scan operator
   this.vm$ = merge(
     this.getUserAction$,
     this.addUserChange,
     this.deleteUserAction$,
     this.detailUserAction$,
     this.closeDetailAction$
   ).pipe(
     scan( (oldVm:UserVm, userVmReducer) => userVmReducer(oldVm), {users:[]} as UserVm )
   );

 }

 private getUserAction$ = this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`).pipe(
   map( users => (vm:UserVm) => ({...vm, users}))

 );

 private addUserChange = this.addUserState.pipe(
   map( user => (vm:UserVm) => ({...vm, users: [...vm.users ,{id:0, name:user}] })),
 )
 private deleteUserAction$ = this.deleteUserSubj.pipe(
   map( user => (vm:UserVm) => ({...vm, users: vm.users.filter(u=>u!==user) }))
 )

 private detailUserAction$ = this.detailUserSubj.pipe(
   map( selectedUser => (vm:UserVm) => ({...vm, selectedUser }))
 )
 private closeDetailAction$ = this.closeDetailSubj.pipe(
   map( _ => (vm:UserVm) => ({...vm, selectedUser:null }))
 )

}
