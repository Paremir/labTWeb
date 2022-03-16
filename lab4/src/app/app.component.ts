import {Component, OnInit} from '@angular/core';
import {Interface2} from "../module/interface2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lab4';

  ngOnInit(): void {
    console.log(object._1field1)
    object._1field1 = 'd';
    console.log(object._1field1)
  }

}
 export  const object:Interface2 = new class implements Interface2 {
  _1field1: any = '_1field1';
  _1field2: any = '_1field2';
  _1field3: any = '_1field3';
  _1field4: any = '_1field4';
  _1field5: any = '_1field5';
  _2field1: any = '_2field1';
  _2field2: any = '_2field2';
}
