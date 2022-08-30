import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
// users
import { UsersRoutingModule } from './users-routing.module';
import { UsersPage } from './users.page';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [UsersPage, UserListComponent, UserFormComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  exports: [UserListComponent, UserFormComponent, UserDetailsComponent, UsersPage]
})
export class UsersModule { }
