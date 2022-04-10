import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyStore} from "../store/MyStore";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [MyStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
