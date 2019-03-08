import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NewtableComponent } from './newtable/newtable.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    NewtableComponent,
    AddbuttonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
