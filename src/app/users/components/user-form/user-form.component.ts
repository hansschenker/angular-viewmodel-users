import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user.types';

@Component({
  selector: 'app-user-form',
  template: `
      <div>
        Name
        <input type="text" #name/>
      </div>
      <div>
        Age
        <input type="number" #age/>
      </div>
    <div>
      <button (click)="addUser({ id:0, name: name.value, age: age.value})">Add User</button>
    </div>
  `,
  styles: [
  ]
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addUser(user: User) {
    console.log("addUser:", user)
  }
}
