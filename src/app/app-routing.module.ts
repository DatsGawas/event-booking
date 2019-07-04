import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventListComponent} from './components/event-list/event-list.component';
import {EventBookComponent} from "./components/event-book/event-book.component";
import {PageNotfoundComponent} from "./components/page-notfound/page-notfound.component";

const routes: Routes = [
  { path: '', redirectTo: 'event-list', pathMatch: 'full'},
  { path: 'event-list', component: EventListComponent},
  { path: 'event-book', component: EventBookComponent},
  { path: '**', component: PageNotfoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
