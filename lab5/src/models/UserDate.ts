import { observable, computed } from 'mobx-angular';

export class UserDate {
  @observable name: string|null = null;
  @observable password: string|null = null;

  constructor(name:string, password: string) {
  this.name = name;
  this.password = password;
  }

}
