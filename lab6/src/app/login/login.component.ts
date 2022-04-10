import { Component, OnInit } from '@angular/core';
import {MyStore} from "../../store/MyStore";
import {UserDate} from "../../models/UserDate";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  userName:string =''
  userPassword:string = ''
  constructor(
    public store: MyStore
  ) {
  }
  addUser(){
    if (this.userName != '' && this.userPassword != '') {
      this.store.addUser(new UserDate(this.userName, this.userPassword));
    }
  }
  getUsers(){
    this.store.users = [];
    setTimeout(
      ()=>{
        this.store.getUsersFromLS()
      },2000
    )
  }
  checkUser(){
    if (this.userName != '' && this.userPassword != '') {
      this.store.checkUserInLS(new UserDate(this.userName, this.userPassword));
    }
  }

}
