import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [UsersComponent, UserListComponent, UserFormComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [UserListComponent, UserFormComponent, UserDetailsComponent]
})
export class UsersModule { }
