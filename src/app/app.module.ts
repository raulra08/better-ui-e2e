import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HoleOneComponent } from './hole-one/hole-one.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HoleTwoComponent} from "./hole-two/hole-two.component";

@NgModule({
  declarations: [
    HoleOneComponent,
    HoleTwoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HoleTwoComponent]
})
export class AppModule { }
