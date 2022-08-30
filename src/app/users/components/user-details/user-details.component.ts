import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

// users
import { User } from '../../types/user.types';


@Component({
  selector: 'app-user-details',
  template: `
    <div style="margin-top:1em" *ngIf="selectedUser">
      {{selectedUser.id}} - {{ selectedUser.name}}
      <button (click)="closeUser()">close</button>
    </div>
  `,
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit, AfterViewInit {
  @Input() selectedUser: User;
  constructor() { }
  ngAfterViewInit(): void {
    console.log("UserDetails-selectedUser:", this.selectedUser)
  }

  ngOnInit(): void {
  }
  closeUser(){}
}
