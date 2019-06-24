import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyDogSitterComponent } from './my-dog-sitter.component';

@NgModule({
  declarations: [
    MyDogSitterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyDogSitterComponent]
})
export class AppModule { }
