import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyDogSitterComponent } from './hole-one/my-dog-sitter.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MyDogSitterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MyDogSitterComponent]
})
export class AppModule { }
