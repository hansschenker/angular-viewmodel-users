import { EditMode, Viewmodel, vmReducer } from './../../shared/viewmodel';

export interface User {
    id: number;
    name: string;
}

export interface UserVm extends Viewmodel<User> {
    users: User[];
    selectedUser: User;
    editMode: EditMode;
    editedUser: User;
}

export type userVmReducer =  vmReducer<User>
