import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  input:string | null = null
  selectedValue:any
  textarea:string | null = null
  constructor() { }

  ngOnInit(): void {
  }

}
