import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventBookComponent } from './components/event-book/event-book.component';
import {HttpClientModule} from "@angular/common/http";
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventBookComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
