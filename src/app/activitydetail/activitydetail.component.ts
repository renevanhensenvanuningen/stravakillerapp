import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Activity } from '../activity.model';
import { StravaserviceService } from '../stravaservice.service';
import { partition } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-activitydetail',
  templateUrl: './activitydetail.component.html',
  styleUrls: ['./activitydetail.component.css']
})
export class ActivitydetailComponent implements OnInit {

  constructor(private stravaService: StravaserviceService, private route: ActivatedRoute) {
  }

  activity: Activity;
  myActivitiesOdd: Activity[];
  myActivitiesEven: Activity[];
  id : string;

  fetching: boolean;


  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
};

  ngOnInit() {
    this.id =  this.route.snapshot.params['id'];
    this.ongetDetails(+this.id);
  }

  ongetDetails(activityId: number) {

    var activity$ = this.stravaService.getActivity(activityId).subscribe(
      activity => {
        console.log('single activity');
        console.log(activity);
        this.activity = activity[0];
      }
    );

  }



  onStravaData() {
    this.fetching  = true;
    this.stravaService.getActivities();
  }
}
