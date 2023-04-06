import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Activity } from './activity.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StravaserviceService {
  clientid = '12257';
  newaccess_token = '7e7133284f12c14ab417df978d0045af55d681bc';

  activities: Activity[] = [];

   // tslint:disable-next-line: max-line-length
  strava_accesstoken_url = 'https://www.strava.com/oauth/token?client_id=12257&client_secret=ed0ef6cc610488dac34b472cab54ab0f057f9f91&refresh_token=662333d22befbcdf2ba820009e4ee44ccd361e5b&grant_type=refresh_token';

  constructor(private http: HttpClient) { }


  getActivity(id: number) {
  let myparams = new HttpParams().set('keys', 'time,heartrate');
  myparams = myparams.append('key_by_type', 'false');
  myparams = myparams.append('access_token', this.newaccess_token);
  return this.http.get< { [name: string]: Activity } >('https://www.strava.com/api/v3/activities/' + id + '/streams',
    {
      params : myparams
    }
  )
  .pipe(map(resultData => {
    const activities: Activity[] = [];
    for (const key in resultData) {
      if (resultData.hasOwnProperty(key)) {
          const element = resultData[key];
          activities.push(element);
        }
      }
      return activities;
      } )
    );
  }

  getActivities(): Observable<Activity[]> {
    var accestoken$ =  this.getActivitiesAccessToken();

    return accestoken$.pipe(
      switchMap((x) => this.http
      .get< { [name: string]: Activity } >('https://www.strava.com/api/v3/athlete/activities',
            {
              params: new HttpParams().set('access_token', x['access_token'])
            }
          )
      .pipe(map(resultData => {
        this.newaccess_token = x['access_token'];
        const activities: Activity[] = [];
        console.log(resultData);
        for (const key in resultData) {
          if (resultData.hasOwnProperty(key)) {
            const element = resultData[key];
            activities.push(element);
          }
        }
          return activities;
      }))),
    );
  }

  getActivitiesAccessToken(): Observable<Object> {
   let body = '';
    return this.http.post<string>(this.strava_accesstoken_url, body);
  }

}
