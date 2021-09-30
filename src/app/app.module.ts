import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { ActivitydetailComponent } from './activitydetail/activitydetail.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

import { CommonModule } from '@angular/common';
import { from } from 'rxjs';



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'details/:id', component: ActivitydetailComponent },
  { path: 'overview', component: MainComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ActivitydetailComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
