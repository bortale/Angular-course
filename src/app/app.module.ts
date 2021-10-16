import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewLesson1Component } from './new-lesson1/new-lesson1.component';

@NgModule({
  declarations: [
    AppComponent,
    NewLesson1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
