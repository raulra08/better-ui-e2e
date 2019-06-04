import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DogSitterAppComponent } from './dog-sitter-app.component';

@NgModule({
  declarations: [
    DogSitterAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DogSitterAppComponent]
})
export class AppModule { }
