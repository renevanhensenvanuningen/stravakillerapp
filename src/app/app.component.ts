import { Component, OnInit } from '@angular/core';
import { StravaserviceService } from './stravaservice.service';
import { Activity } from './activity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'renestrava';
  fetching = false;

  constructor() {

  }
}

