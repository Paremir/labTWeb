import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  ArrayMenu: Array<Cart> = [];
  constructor() { }

  ngOnInit(): void {
    this.ArrayMenu.push(new Cart('Shiba','Shiba','Shiba','https://material.angular.io/assets/img/examples/shiba2.jpg','Shiba'));
    this.ArrayMenu.push(new Cart('Sharpei','Sharpei','Sharpei','https://petsi.net/images/dogphotos/chinese-shar-pei-puppy.jpg','Sharpei'));
    this.ArrayMenu.push(new Cart('Husky','Husky','Husky','https://wl-adme.cf.tsp.li/resize/728x/jpg/850/5f8/58a7125715a2d7859031f0d013.jpg','Husky'));
  }
  like(text:string){
    alert(`You like ${text}!`)
  }
}

class Cart {
  Menu:string;
  Name:string;
  Description:string ;
  Img:string;
  ButtonName:string;

  constructor(menu:string, name:string, description:string, img:string, buttonName:string) {
  this.Menu = menu;
  this.Name = name;
  this.Description = description;
  this.Img = img;
  this.ButtonName = buttonName;
  }
}
