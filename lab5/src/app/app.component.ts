import {Component, OnInit} from '@angular/core';
import {MyStore} from "../store/MyStore";
import {UserDate} from "../models/UserDate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

}

