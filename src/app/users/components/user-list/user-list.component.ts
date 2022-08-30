import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../types/user.types';

@Component({
  selector: 'app-user-list',
  template: `
    <h3>Users</h3>
    <div class="list">
    <div *ngFor="let user of users">
      <button (click)="deleteUser(user)" >X</button>  
      <button (click)="detailUser(user)" >detail</button>
      {{user.id}} - {{user.name}} - {{user.age}}
    </div> 
    

</div>
    
  `,
  styles: [
  ]
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  constructor() { }

  ngOnInit(): void {
  }
  closeUser(){}
  deleteUser(user: User){}
  detailUser(user: User){}
}
