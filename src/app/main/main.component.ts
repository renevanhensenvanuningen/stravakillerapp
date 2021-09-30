import { Component, OnInit } from '@angular/core';
import { StravaserviceService } from '../stravaservice.service';
import { Activity } from '../activity.model';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  myActivities: Observable<Activity[]>;
  fetching: boolean;

  ngOnInit() {
    this.myActivities = this.stravaService.getActivities();
  }

  ongetDetails(activityId: number) {
    this.stravaService.getActivity(activityId).subscribe((activity) => {
      console.log(activity);
    });
  }

  constructor(private stravaService: StravaserviceService) {}

  public onStravaData() {
    this.fetching = true;
    this.myActivities = this.stravaService.getActivities();
  }
}
