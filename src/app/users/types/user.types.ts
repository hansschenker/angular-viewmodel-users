import {  Viewmodel } from './viewmodel';

export interface User {
    id: number;
    name: string;
    age: number;
}

export interface UserVm extends Viewmodel<User> {
    // users: User[];
    // selectedUser: User | null;
}

export type UserVmFn = (vm: Viewmodel<User>) => Viewmodel<User> 

