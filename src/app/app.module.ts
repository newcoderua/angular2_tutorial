import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';


@NgModule({
  declarations: [
    AppComponent, UserComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
