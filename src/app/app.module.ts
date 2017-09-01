import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SortPipe} from './app.sort';
import {ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    SortPipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
