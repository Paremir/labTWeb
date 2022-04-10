import { observable, action, computed } from 'mobx-angular';
import { Injectable } from "@angular/core";
import {UserDate} from "../models/UserDate";
@Injectable()
export class MyStore {
  @observable users: UserDate[] = [];
  constructor( ) {
    this.addUser(new UserDate('Oleg','Scrinic'));

    if (!localStorage.getItem('Users')){
      this.saveUsersInLS();
    }
  }

  @action saveUsersInLS(){
    localStorage.setItem('Users',JSON.stringify(this.users));
  }

  @action getUsersFromLS(){
    let temp = localStorage.getItem('Users');
    if (temp){
      this.users = JSON.parse(temp);
    }
    else{
      alert('Local Storage is empty');
    }
  }

  @action addUser(user: UserDate) {
    if (!this.users.find(b=> b.name == user.name)){
      this.users.push(user);
    }
  }

  @action deleteUser(user: UserDate) {
    let index = this.users.findIndex(b => b.name == user.name);
    this.users.splice(index, 1);
  }

  @action updateUser(user: UserDate) {
    let index = this.users.findIndex(b => b.name == user.name);
    this.users[index] = user;
  }

}
