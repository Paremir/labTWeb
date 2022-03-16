import {Component, OnInit} from '@angular/core';
import {Interface2} from "../module/interface2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lab4';
  myobj = object;
  ngOnInit(): void {
    console.log(object)
  }

}
 export  const object:Interface2 = new class implements Interface2 {
  _1field1: any = '_1field1 Value';
  _1field2: any = '_1field2 Value';
  _1field3: any = '_1field3 Value';
  _1field4: any = '_1field4 Value';
  _1field5: any = '_1field5 Value';
  _2field1: any = '_2field1 Value';
  _2field2: any = '_2field2 Value';
}
