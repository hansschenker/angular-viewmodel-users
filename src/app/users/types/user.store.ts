import { Observable } from "rxjs";
import { toArray } from "rxjs/operators";
import { ObservableStore } from "../state/store";
import { User, UserVm } from "./user.types";

export class UserStore extends ObservableStore<UserVm>{
    constructor() {
        super({ items: [], selectedItem: null});
    }
    addUser(user: User) {
        this.updateState({ items: [...this.state().items, user], selectedItem: null });
    }
    deleteUser(user: User) {
        this.updateState({ items: this.state().items.filter(u => u.id !== user.id), selectedItem: null });
    }
    selectUser(user: User) {
        this.updateState({items: this.state().items, selectedItem: user });
    }
    updateUser(user: User) {
        this.updateState({items: this.state().items.map(u => u.id === user.id ? user : u), selectedItem: null });
    }
    allUsers(): User[] {
        return this.state().items;
    }
}