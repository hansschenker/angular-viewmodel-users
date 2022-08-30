import { Viewmodel } from './types/viewmodel';
import { UserVm } from './types/user.types';
import { Component, OnInit } from '@angular/core';
// rxjs
import { merge, Observable, Subject } from 'rxjs';
import { map, tap, scan } from "rxjs/operators";
// users
import { User } from "./types/user.types";
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';


@Component({
  selector: 'app-users',
  templateUrl: "./users.page.html",
  styles: [
    `
    .field {
      position: relative;
    }
    input {
      position: absolute;
      left: 50px;
    }
    .list {
      margin-top: 50px;
    }
    `
  ]
})
export class  UsersPage {
 
 // define observable vm
 //public vm$ : Observable<Viewmodel<User>>;
 //initialUserVm: UserVm = { items:[] , selectedItem: undefined, editMode: undefined, editedItem: undefined  }
 // public vmChanges: Observable<UserVm>;
 
 // create action streams
//  public addState = new Subject<User>();
//  public deleteState = new Subject<User>();
//  public detailState = new Subject<User>();
//  public detailCloseState = new Subject();

 constructor(private svc: UserService) {
   // merge action streams into one
   // and track state with the help of scan operator
//    this.vmChanges = merge(
//      this.getItemsChanges,
//      this.addItemChanges,
//      this.deleteChanges,
//      this.detailChanges,
//      this.detailCloseChanges
//    ).pipe(
//      scan( (oldVm:UserVm, UserVmFn) => UserVmFn(oldVm), { items:[] } as UserVm  )
//    );

 }
 addUser(user: User) {}
  deleteUser(user: User) {}
  selectUser(user: User) {}
  updateUser(user: User) {}
  
//  private getItemsChanges = this.http.get<User[]>(`api/users`).pipe(
//    map( items => (vm:UserVm) => ({...vm, items: items}))

//  );

//  private addItemChanges = this.addState.pipe(
//    map( item => (vm:UserVm) => ({...vm, items: [...vm.items , item ] })),
//  )
//  private deleteChanges = this.deleteState.pipe(
//    tap( (u: User) => console.log("deleteUser:", u.id)),
//    map( user => (vm:UserVm) => ({...vm, items: vm.items.filter(u => u.id !== user.id ) }))
//  )

//  private detailChanges = this.detailState.pipe(
//    map( selectedItem => (vm:UserVm) => ({...vm, selectedUser: selectedItem }))
//  )
//  private detailCloseChanges = this.detailCloseState.pipe(
//    map( _ => (vm:UserVm) => ({...vm, selectedUser:null }))
//  )
//  addUser(user: User) {
//   this.addState.next( user)
//  }
} // class
